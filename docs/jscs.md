# JSCS Report

### src/mandrill-webhook-event-parser.js

| Line | Column | Rule | Message | Evidence |
|:----:|:------:|:----:|:--------|:---------|
| 25 | 31 | requireCamelCaseOrUpperCaseIdentifiers | All identifiers must be camelCase or UPPER_CASE | ```       if (req.body && req.body.↓andrill_events) { ``` |
| 27 | 51 | requireCamelCaseOrUpperCaseIdentifiers | All identifiers must be camelCase or UPPER_CASE | ```           req.mandrillEvents = JSON.parse(req.body.↓andrill_events); ``` |

---

#### Summary

2 code style error(s) found.
