mkdir -p dst
rm -rf dst/*
npm run build
cd dst
surge
