# Prodigy
Launch https://prodi.gy/

Example:
```
docker build . --tag=prodigy
docker run -p8080:8080 -ti prodigy python3 -m prodigy ner.teach news_headlines en_core_web_sm "Australia" --api nyt
```
