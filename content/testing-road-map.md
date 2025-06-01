---
title: Test Markdown
description: Random Text
duration: 3 days
difficulty: Very Hard!
---
# Comprehensive Markdown Reference Guide

This document demonstrates all standard Markdown elements and syntax.

## Table of Contents

- [Text Formatting](#text-formatting)
- [Lists](#lists)
- [Code](#code)
- [Links and Images](#links-and-images)
- [Tables](#tables)
- [Advanced Features](#advanced-features)

---

## Text Formatting

### Headings

# Heading 1 (H1)
## Heading 2 (H2)
### Heading 3 (H3)
#### Heading 4 (H4)

### Emphasis

This text includes **bold text**, *italic text*, and ***bold italic text***.

You can also use __bold__ and _italic_ with underscores.

~~This text is struck through~~.

### Blockquotes

> This is a simple blockquote.
> 
> It can span multiple lines and paragraphs.

> **Nested blockquotes** are also possible:
> 
> > This is a nested quote within a quote.
> > 
> > > And this goes even deeper!

---

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item A
  - Nested item B
    - Deeply nested item 1
    - Deeply nested item 2
- Third item with `inline code`

### Ordered Lists

1. First numbered item
2. Second numbered item
   1. Nested numbered item A
   2. Nested numbered item B
      1. Deeply nested numbered item
      2. Another deeply nested item
3. Third numbered item

### Mixed Lists

1. Ordered item
   - Unordered nested item
   - Another unordered nested item
     1. Back to ordered nesting
     2. More ordered nesting
2. Another ordered item

---

## Code

### Inline Code

Here's some `inline code` within a sentence. You can also reference variables like `userName` or functions like `getElementById()`.

### Fenced Code Blocks

#### Without Syntax Highlighting

```
This is a plain code block
without syntax highlighting.
It preserves formatting and spacing.
```

#### With Syntax Highlighting

```javascript
// JavaScript example
function greetUser(name) {
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    return greeting;
}

greetUser("World");
```

```python
# Python example
def calculate_fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Generate first 10 Fibonacci numbers
fib_sequence = [calculate_fibonacci(i) for i in range(10)]
print(fib_sequence)
```

```css
/* CSS example */
.markdown-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

.code-block {
    background-color: #f4f4f4;
    border-radius: 4px;
    padding: 16px;
}
```

---

## Links and Images

### Links

Here's a [link to Google](https://www.google.com) and another [link to GitHub](https://github.com).

You can also use reference-style links like [this one][ref-link] or [this website][1].

[ref-link]: https://www.example.com "Example Website"
[1]: https://www.markdown-guide.org "Markdown Guide"

### Images

![Markdown Logo](https://markdown-here.com/img/icon256.png "Markdown Logo")

You can also use reference-style images:

![Alternative text][image-ref]

[image-ref]: https://via.placeholder.com/300x200 "Placeholder Image"

---

## Tables

### Basic Table

| Name     | Age | City        | Occupation    |
|----------|-----|-------------|---------------|
| Alice    | 28  | New York    | Developer     |
| Bob      | 34  | San Francisco | Designer    |
| Charlie  | 29  | London      | Manager       |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Content      | Content        | Content       |
| More text    | Centered       | $1,234.56     |
| Final row    | Middle         | 100%          |

### Complex Table

| Feature | **Basic Plan** | **Pro Plan** | **Enterprise** |
|---------|:--------------:|:------------:|:--------------:|
| Users   | 1-5            | 1-50         | Unlimited      |
| Storage | 10GB           | 100GB        | 1TB+           |
| Support | Email          | Phone        | 24/7 Dedicated |
| Price   | $9/month       | $29/month    | Custom         |

---

## Advanced Features

### Horizontal Rules

You can create horizontal rules using three or more hyphens, asterisks, or underscores:

---

***

___

### Checkboxes (Task Lists)

- [x] Complete task 1
- [x] Complete task 2
- [ ] Incomplete task 3
- [ ] Incomplete task 4
  - [x] Nested completed subtask
  - [ ] Nested incomplete subtask

### Collapsible Sections

<details>
<summary>Click to expand this section</summary>

This content is hidden by default and can be expanded by clicking the summary.

You can include any Markdown content here:

- Lists
- **Bold text**
- `Code snippets`
- Even tables!

| Column 1 | Column 2 |
|----------|----------|
| Data     | More data|

</details>

<details>
<summary>Another collapsible section with code</summary>

```javascript
function hiddenFunction() {
    console.log("This function was hidden!");
}
```

</details>

### Emojis

Here are some common emojis used in Markdown:

- 😀 😃 😄 😁 😆 😅 😂 🤣
- 👍 👎 👌 🤝 👏 🙌 💪
- ❤️ 💙 💚 💛 🧡 💜 🖤 🤍 🤎
- 🚀 ⭐ 🔥 💡 📚 🎯 ✅ ❌
- 🎉 🎊 🎈 🎁 🏆 🥇 🏅

### Escape Characters

Sometimes you need to escape special characters:

\*This text is not italic\*

\`This is not code\`

\# This is not a heading

### Line Breaks and Paragraphs

This is the first paragraph. It contains multiple sentences that flow together naturally.

This is the second paragraph. To create a new paragraph, simply leave a blank line between blocks of text.

This line ends with two spaces to create a line break.  
This line appears directly below the previous one.

---

## Conclusion

This document demonstrates the comprehensive range of Markdown syntax elements. Markdown provides a simple yet powerful way to format text that remains readable in its raw form while converting beautifully to HTML and other formats.

For more information, visit the [official Markdown specification](https://spec.commonmark.org/) or the [Markdown Guide](https://www.markdownguide.org/).

**Happy writing!** 🎉