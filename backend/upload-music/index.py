import os
import boto3
import urllib.request


def handler(event: dict, context) -> dict:
    """Скачивает музыкальный файл из интернета и сохраняет в S3 проекта"""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": "",
        }

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    key_id = os.environ["AWS_ACCESS_KEY_ID"]
    file_key = "music/wedding-music.mp3"
    cdn_url = f"https://cdn.poehali.dev/projects/{key_id}/files/{file_key}"

    # Проверяем — файл уже есть?
    try:
        s3.head_object(Bucket="files", Key=file_key)
        return {
            "statusCode": 200,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": f'{{"url": "{cdn_url}", "status": "already_exists"}}',
        }
    except Exception:
        pass

    # Скачиваем музыку
    music_url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    req = urllib.request.Request(music_url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=25) as response:
        data = response.read()

    s3.put_object(
        Bucket="files",
        Key=file_key,
        Body=data,
        ContentType="audio/mpeg",
    )

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": f'{{"url": "{cdn_url}", "status": "uploaded"}}',
    }