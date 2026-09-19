from pathlib import Path


def extract_text_from_upload(filename: str, content: bytes, content_type: str) -> str:
    suffix = Path(filename).suffix.lower()

    text_extensions = {
        ".txt", ".csv", ".log", ".eml", ".html", ".htm", ".json"
    }

    if suffix in text_extensions or content_type.startswith("text/"):
        text = content.decode("utf-8", errors="ignore").strip()
        if not text:
            raise ValueError("The uploaded file contains no readable text.")
        return text[:20000]

    raise ValueError(
        "Image/PDF OCR is not enabled in this local version yet. "
        "Connect the Bedrock vision/OCR pipeline before using image uploads."
    )
