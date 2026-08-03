package main

import (
	"crypto/sha256"
	"database/sql"
	"flag"
	"fmt"
	"os"
	"time"

	_ "modernc.org/sqlite"
)

func main() {
	dbPath := flag.String("db", "/etc/kdae-panel/panel.db", "path to panel.db")
	token := flag.String("token", "", "session token to insert or delete")
	del := flag.Bool("delete", false, "delete the session for -token instead of inserting")
	flag.Parse()

	db, err := sql.Open("sqlite", *dbPath)
	if err != nil {
		fmt.Println("open error:", err)
		os.Exit(1)
	}
	defer db.Close()

	if *del {
		hash := sha256.Sum256([]byte(*token))
		result, err := db.Exec("DELETE FROM sessions WHERE token_hash = ?", hash[:])
		if err != nil {
			fmt.Println("delete error:", err)
			os.Exit(1)
		}
		affected, _ := result.RowsAffected()
		fmt.Printf("deleted %d session(s)\n", affected)
		return
	}

	var userID int64
	var username string
	err = db.QueryRow("SELECT id, username FROM users ORDER BY id LIMIT 1").Scan(&userID, &username)
	if err != nil {
		fmt.Println("query user error:", err)
		os.Exit(1)
	}
	hash := sha256.Sum256([]byte(*token))
	now := time.Now().Unix()
	_, err = db.Exec("INSERT INTO sessions(token_hash, user_id, csrf_token, created_at, expires_at, last_seen_at) VALUES(?, ?, ?, ?, ?, ?)",
		hash[:], userID, "diag-csrf-token", now, now+86400, now)
	if err != nil {
		fmt.Println("insert session error:", err)
		os.Exit(1)
	}
	fmt.Printf("inserted session for user %s\n", username)
}
