# Beisent Lab

Beisent Lab 是一个由学生自发组织的开放实验室，专注于计算机图形学、软件开发、Web 开发、人工智能、数字逻辑电路、数学、物理与化学等领域的学习与研究。

## 项目结构

```
BeisentSite/
├── index.html          # 首页
├── projects.html       # 项目展示页
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── projects.js     # 项目页渲染脚本
└── data/
    └── projects.json   # 课程与项目数据
```

## 本地运行

```bash

python3 -m http.server 8000
```

访问 `http://localhost:8000`

## 管理课程与项目

编辑 `data/projects.json` 即可增删改课程和项目，无需修改 HTML。

### 添加课程

在 `courses` 数组中追加：

```json
{
  "code": "BCS002",
  "title": "课程名称",
  "tag": "课程",
  "href": "#"
}
```

### 添加项目

在 `projects` 数组中追加：

```json
{
  "name": "项目名称",
  "label": "类型标签",
  "desc": "项目简介",
  "highlights": ["特性1", "特性2"],
  "tags": ["技术栈1", "技术栈2"],
  "href": "#"
}
```

## License

MIT
