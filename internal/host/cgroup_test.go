package host

import "testing"

func TestParseCgroupDir(t *testing.T) {
	cases := []struct {
		name    string
		content string
		want    string
	}{
		{"v2 simple", "0::/services/dae/instance1\n", "/services/dae/instance1"},
		{"v2 root", "0::/\n", ""},
		{"v1 only", "10:memory:/dae\n", ""},
		{"mixed v1 first", "9:cpu:/dae\n0::/user.slice/unit.service\n", "/user.slice/unit.service"},
		{"empty", "", ""},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := parseCgroupDir(tc.content); got != tc.want {
				t.Fatalf("parseCgroupDir(%q) = %q，期望 %q", tc.content, got, tc.want)
			}
		})
	}
}

func TestParseCgroupField(t *testing.T) {
	content := "usage_usec 631900000\nuser_usec 438900000\nsystem_usec 193000000\nnice_usec 0\n"
	got, ok := parseCgroupField(content, "usage_usec")
	if !ok || got != 631900000 {
		t.Fatalf("usage_usec = %d, %v，期望 631900000, true", got, ok)
	}
	if got, ok := parseCgroupField(content, "user_usec"); !ok || got != 438900000 {
		t.Fatalf("user_usec = %d, %v", got, ok)
	}
	if got, ok := parseCgroupField(content, "missing"); ok || got != 0 {
		t.Fatalf("missing = %d, %v，期望 0, false", got, ok)
	}
}

func TestParseCgroupFieldMultilineValues(t *testing.T) {
	got, ok := parseCgroupField("usage_usec 123\n", "usage_usec")
	if !ok || got != 123 {
		t.Fatalf("got %d, %v", got, ok)
	}
	if got, ok := parseCgroupField("usage_usec\n", "usage_usec"); ok {
		t.Fatalf("无值行不应解析成功: %d", got)
	}
}

func TestCgroupCPUTimeOverflow(t *testing.T) {
	if got := cgroupCPUTime(-1); got != 0 {
		t.Fatalf("非法 pid 应返回 0，得到 %d", got)
	}
}
