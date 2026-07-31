package host

import (
	"context"
	"net"
	"sort"
)

type NetworkInterface struct {
	Name      string   `json:"name"`
	Addresses []string `json:"addresses,omitempty"`
}

func queryInterfaces(ctx context.Context) ([]NetworkInterface, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	interfaces, err := net.Interfaces()
	if err != nil {
		return nil, err
	}

	result := make([]NetworkInterface, 0, len(interfaces))
	for _, networkInterface := range interfaces {
		if err := ctx.Err(); err != nil {
			return nil, err
		}
		item := NetworkInterface{Name: networkInterface.Name}
		addresses, err := networkInterface.Addrs()
		if err == nil {
			seen := make(map[string]struct{}, len(addresses))
			for _, address := range addresses {
				value := address.String()
				if _, exists := seen[value]; exists {
					continue
				}
				seen[value] = struct{}{}
				item.Addresses = append(item.Addresses, value)
			}
			sort.Strings(item.Addresses)
		}
		result = append(result, item)
	}
	sort.Slice(result, func(left, right int) bool {
		return result[left].Name < result[right].Name
	})
	return result, nil
}
