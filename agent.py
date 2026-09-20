from strands import Agent
from prompts import SYSTEM_PROMPT
from tools import analyze_message, check_url

agent = Agent(
    system_prompt=SYSTEM_PROMPT,
    tools=[analyze_message, check_url],
)

def investigate(message: str):
    response = agent(message)
    return str(response)

if __name__ == "__main__":
    print("AmazonShield AI Agent")
    print("Type a suspicious message and press Enter. Type 'exit' to quit.\n")
    while True:
        message = input("> ").strip()
        if message.lower() == "exit":
            break
        if not message:
            continue
        try:
            print("\n" + investigate(message) + "\n")
        except Exception as exc:
            print(f"\nError: {exc}\n")
