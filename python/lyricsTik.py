import os, sys, time, threading, subprocess, shutil

# ================= NHẠC =================
def play_music():
    if not os.path.exists("music.mp3"):
        return
    if shutil.which("ffplay"):
        subprocess.call(
            ["ffplay", "-nodisp", "-autoexit", "-loglevel", "quiet", "music.mp3"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )

# ================= LYRIC =================
lyrics = [
    "anh nhớ từng phút",
    "yên bình tay nắm tay",
    "nhớ khoảnh khắc đôi mình",
    "còn đắm say",
    "chỉ vừa như mới hôm nào",
    "mà sao giờ lại",
    "xa quá",

    "anh vẫn nhớ khi trời",
    "vừa nhá nhem",
    "qua đón em dạo",
    "cùng phố đêm",
    "giờ thì không còn nữa",
    "cô đơn thân với anh thêm",

    "anh cố để chi vậy",
    "rồi cũng ra như này",
    "cứ vun mối tình",
    "mặc tấm thân hao gầy",
    "liệu có phút giây nào",
    "người xót anh không vậy",
    "mọi thứ chỉ để anh",
    "gánh lấy",
    "chẳng phút giây nào",
    "anh hết yêu em",
    "mỗi lần ướt mi hoen",
    "là do anh nhớ em thêm",
    "tại sao lại nói yêu anh",
    "mà lại để mi anh",
    "ướt nhèm",

    "em cũng có nỗi niềm",
    "của riêng mình",
    "em xin lỗi đã",
    "bỏ anh một mình",
    "sau bao tháng năm",
    "ta cùng chung đường",
    "giờ hai đứa hai nơi",

    "đoạn cảm xúc",
    "ngỡ như là lâu dài",
    "nhưng lại kết thúc",
    "bất ngờ vì hiểu lầm",
    "em trách sao lúc đó",
    "mình không vì nhau mà cố",

    "em vẫn còn nhớ những lần",
    "mình đã hứa hẹn",
    "cùng nhau mãi mãi",
    "chẳng rời xa",
    "và môi hôn",
    "vẫn để lại đó bao",
    "ngọt ngào xưa",
    "giờ thì đã quá trễ rồi",
    "vì phút bốc đồng",
    "mà đôi ta chẳng thể nào",
    "cạnh bên",
    "hỏi em còn yêu không",
    "em trả lời là không còn",
    "nhưng đó chỉ là dối lòng",

    "thật ra anh biết từ đầu",
    "rồi babe",
    "rằng lời yêu đó",
    "chỉ là gió bay",
    "giờ tim vỡ nát như này",
    "do anh cố chấp nên vậy",

    "mong em hạnh phúc",
    "đi bên người ta",
    "phần anh sẽ cố",
    "gắng để vượt qua",
    "đến đây thôi em à",
    "đến lúc ta phải",
    "chia xa"
]

# ================= AUTO TIMELINE =================
def calc_time(line):
    return max(1.7, len(line) * 0.08)

# ================= LED ARGB =================
COLORS = [31, 91, 33, 93, 32, 92, 36, 96, 34, 94, 35, 95]

def led(text, duration):
    start = time.time()
    while time.time() - start < duration:
        for s in range(len(COLORS)):
            out = ""
            for i, c in enumerate(text):
                out += f"\033[{COLORS[(i+s)%len(COLORS)]}m{c}\033[0m"
            sys.stdout.write("\r" + out + " ")
            sys.stdout.flush()
            time.sleep(0.03)
            if time.time() - start >= duration:
                break
    print()

# ================= MAIN =================
if __name__ == "__main__":
    os.system("cls")
    print("\n🔥 LYRIC LED ARGB — KHÔNG BUÔNG 🔥\n")

    threading.Thread(target=play_music, daemon=True).start()

    for line in lyrics:
        led(line, calc_time(line))

    print("\n🎶 HẾT BÀI 🎶\n")
