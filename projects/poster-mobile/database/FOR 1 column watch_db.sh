#!/bin/bash

while true; do
    clear
    sqlite3 -header -column users.db \
    "SELECT id, login, substr(password, 1, 5) || '*****' AS password,
        created_at
    FROM users;"

    # Получаем JSON из SQLite
    poster_states_json=$(sqlite3 users.db "SELECT poster_states FROM users LIMIT 1;")

    # Проверяем, корректный ли JSON
    if echo "$poster_states_json" | jq empty >/dev/null 2>&1; then
        echo -e "\nPoster States (Filtered):"
        echo "$poster_states_json" | jq -r '
            .[] | 
            "\(.name):\n\(
                .state | to_entries | 
                map(select(.key | startswith("position")) | 
                select(.value | type == "object") | 
                "  \(.key): \(.value.x),\(.value.y)"
                ) | join("\n")
            )"
        '
    else
        echo -e "\nError: poster_states is not a valid JSON."
    fi

    sleep 10
done