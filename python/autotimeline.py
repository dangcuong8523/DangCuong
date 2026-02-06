import whisper
import json

AUDIO_FILE = "music.mp3"

model = whisper.load_model("base")  # base là đủ dùng
result = model.transcribe(AUDIO_FILE, language="vi")

timeline = []

for seg in result["segments"]:
    timeline.append({
        "start": round(seg["start"], 2),
        "end": round(seg["end"], 2),
        "text": seg["text"].strip()
    })

with open("timeline.json", "w", encoding="utf-8") as f:
    json.dump(timeline, f, ensure_ascii=False, indent=2)

print("✅ Đã tạo timeline.json")
