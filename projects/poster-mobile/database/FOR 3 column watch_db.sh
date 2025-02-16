#!/bin/bash

while true; do
    clear
    sqlite3 -header -column users.db \
    "SELECT id, login, substr(password, 1, 5) || '*****' AS password,
        created_at
    FROM users;"

    poster_states_json=$(sqlite3 users.db "SELECT poster_states FROM users LIMIT 1;")

    if echo "$poster_states_json" | jq empty >/dev/null 2>&1; then
        echo -e "\nPoster States (Filtered):"

        # Формируем два столбца данных
        column1=$(echo "$poster_states_json" | jq -r '
            .[0:2][] | 
            "\(.name):\n\(
                .state | to_entries | 
                map(select(.key | startswith("position")) | 
                select(.value | type == "object") | 
                "  \(.key): \(.value.x),\(.value.y)"
                ) | join("\n")
            )"
        ')

        column2=$(echo "$poster_states_json" | jq -r '
            .[2:4][] | 
            "\(.name):\n\(
                .state | to_entries | 
                map(select(.key | startswith("position")) | 
                select(.value | type == "object") | 
                "  \(.key): \(.value.x),\(.value.y)"
                ) | join("\n")
            )"
        ')
		
		column3=$(echo "$poster_states_json" | jq -r '
            .[4:6][] | 
            "\(.name):\n\(
                .state | to_entries | 
                map(select(.key | startswith("position")) | 
                select(.value | type == "object") | 
                "  \(.key): \(.value.x),\(.value.y)"
                ) | join("\n")
            )"
        ')

        paste <(echo "$column1") <(echo "$column2") <(echo "$column3")| column -t -s $'\t'
    else
        echo -e "\nError: poster_states is not a valid JSON."
    fi

    sleep 10
done