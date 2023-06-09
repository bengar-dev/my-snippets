class SnippetServices {
  constructor() {}

  public async transformStringToMarkdown(code: string, language: string) {
    if (language === "react") {
      return "```jsx\n" + code + "\n```";
    }
    return "```" + language + "\n" + code + "\n```";
  }
}

export default SnippetServices;
