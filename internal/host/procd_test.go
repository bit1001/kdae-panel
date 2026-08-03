package host

import "testing"

func TestSelectProcdPID(t *testing.T) {
	cases := []struct {
		name       string
		fields     []string
		service    string
		comm       map[int]string
		ppid       map[int]string
		want       int
		wantErr    bool
	}{
		{
			name:    "只有 procd 管理的 dae",
			fields:  []string{"5687"},
			service: "dae",
			comm:    map[int]string{5687: "dae"},
			ppid:    map[int]string{5687: "1"},
			want:    5687,
		},
		{
			name:    "面板临时子进程排在前面",
			fields:  []string{"20493", "5687"},
			service: "dae",
			comm:    map[int]string{20493: "dae", 5687: "dae"},
			ppid:    map[int]string{20493: "18523", 5687: "1"},
			want:    5687,
		},
		{
			name:    "面板临时子进程在中间",
			fields:  []string{"5687", "20493", "5688"},
			service: "dae",
			comm:    map[int]string{5687: "dae", 20493: "dae", 5688: "dae"},
			ppid:    map[int]string{5687: "1", 20493: "18523", 5688: "18523"},
			want:    5687,
		},
		{
			name:    "没有 ppid=1 的候选时回退到第一个",
			fields:  []string{"20493", "5687"},
			service: "dae",
			comm:    map[int]string{20493: "dae", 5687: "dae"},
			ppid:    map[int]string{20493: "18523", 5687: "18523"},
			want:    20493,
		},
		{
			name:    "跳过 comm 不匹配的候选",
			fields:  []string{"20493", "5687"},
			service: "dae",
			comm:    map[int]string{20493: "ubus-at-daemon", 5687: "dae"},
			ppid:    map[int]string{20493: "1", 5687: "18523"},
			want:    5687,
		},
		{
			name:    "全部候选 comm 都不匹配",
			fields:  []string{"20493", "5687"},
			service: "dae",
			comm:    map[int]string{20493: "other", 5687: "other"},
			ppid:    map[int]string{20493: "1", 5687: "1"},
			wantErr: true,
		},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			readComm := func(pid int) string { return tc.comm[pid] }
			readPPid := func(pid int) string { return tc.ppid[pid] }
			got, err := selectProcdPID(tc.fields, tc.service, readComm, readPPid)
			if tc.wantErr {
				if err == nil {
					t.Fatalf("selectProcdPID(%v) 期望报错，得到 %d", tc.fields, got)
				}
				return
			}
			if err != nil {
				t.Fatalf("selectProcdPID(%v) 出错: %v", tc.fields, err)
			}
			if got != tc.want {
				t.Fatalf("selectProcdPID(%v) = %d，期望 %d", tc.fields, got, tc.want)
			}
		})
	}
}
