import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.css'
})
export class ToolsListComponent {
  public tools: any[] = [
    {
      "id": 1,
      "title": "JSON Formatter",
      "description": "Formats JSON data into a readable and indented format.",
      "url" : "/tool/json-formatter"
    },
    {
      "id": 2,
      "title": "JSON Parser",
      "description": "Parses JSON strings into JavaScript objects.",
      "url" : "/tool/json-parser"
    },
    {
      "id": 3,
      "title": "Hex String Generator",
      "description": "Generates a hexadecimal string of a specified length.",
      "url" : "/tool/hex-string-generator"
    },
    {
      "id": 4,
      "title": "URL Encoder",
      "description": "Encodes special characters in URLs to ensure they are properly transmitted.",
      "url" : "/tool/url-encoder"
    },
    {
      "id": 5,
      "title": "URL Decoder",
      "description": "Decodes URL-encoded strings back into readable text.",
      "url" : "/tool/url-decorder"
    },
    {
      "id": 6,
      "title": "Base64 Encoder",
      "description": "Encodes text or data into a Base64 format.",
      "url" : "/tool/base64-encoder"
    },
    {
      "id": 7,
      "title": "Base64 Decoder",
      "description": "Decodes Base64 encoded data back into its original format.",
      "url" : "/tool/base64-decoder"
    },
    {
      "id": 8,
      "title": "Text Diff Checker",
      "description": "Compares two text inputs and highlights the differences.",
      "url" : "/tool/text-diff-checker"
    },
    {
      "id": 9,
      "title": "Regex Tester",
      "description": "Tests regular expressions against sample text.",
      "url" : "/tool/regex-tester"
    },
    {
      "id": 10,
      "title": "Markdown Previewer",
      "description": "Previews Markdown-formatted text in real-time.",
      "url" : "/tool/markdown-format"
    }
  ];
}
