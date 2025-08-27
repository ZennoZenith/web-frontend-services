run-toast:
    cd toast && bun install && bun run build
    cd toast && bunx @tailwindcss/cli --minify --optimize -i ./input.css -o ./static/build/tailwind.css
    simple-http-server -p 9000 --index ./toast
