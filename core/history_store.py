from collections import deque
from typing import Optional

_HISTORY = deque(maxlen=200)


def add_investigation(item: dict) -> dict:
    _HISTORY.appendleft(item)
    return item


def get_history(limit: int = 20, result_filter: Optional[str] = None) -> list[dict]:
    items = list(_HISTORY)
    if result_filter:
        result_filter = result_filter.lower()
        items = [item for item in items if item["result"].lower() == result_filter]
    return items[:limit]


def get_investigation(investigation_id: str) -> Optional[dict]:
    for item in _HISTORY:
        if item["investigation_id"] == investigation_id:
            return item
    return None
