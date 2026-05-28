---
title: 企业微信推送
date: 2021-11-23
tags:
---

python食用

[点击获取企业微信参数填对应框](http://note.youdao.com/s/HMiudGkb)

```python
import json
import requests

# 发送的消息
message = '我是通知'
# 填下面4个参数
def wx_push(message):
    touser = '账号'      # 多个接收者用 | 分隔
    agentid = 'AgentId'
    secret = 'Secret'
    corpid = '企业ID'

    json_dict = {
        "touser": touser,
        "msgtype": "text",
        "agentid": agentid,
        "text": {
            "content": message
        },
        "safe": 0,
        "enable_id_trans": 0,
        "enable_duplicate_check": 0,
        "duplicate_check_interval": 1800
    }

    response = requests.get(
        f"https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid={corpid}&corpsecret={secret}")
    data = json.loads(response.text)
    access_token = data['access_token']

    json_str = json.dumps(json_dict)
    response_send = requests.post(
        f"https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token={access_token}", data=json_str)
    return json.loads(response_send.text)['errmsg'] == 'ok'

wx_push(message)
```

