import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ToolsListComponent} from "./tools-list/tools-list.component";
import {JSONFormatterComponent} from "./jsonformatter/jsonformatter.component";
import {MarkdownFormatComponent} from "./markdown-format/markdown-format.component";
import {RegexTesterComponent} from "./regex-tester/regex-tester.component";
import {TextDiffCheckerComponent} from "./text-diff-checker/text-diff-checker.component";
import {Base64EncoderDecoderComponent} from "./base64-encoder-decoder/base64-encoder-decoder.component";
import {UrlEncoderDecoderComponent} from "./url-encoder-decoder/url-encoder-decoder.component";
import {HexStringGeneratorComponent} from "./hex-string-generator/hex-string-generator.component";
import {JSONParserComponent} from "./jsonparser/jsonparser.component";
import {TotpGeneratorComponent} from "./totp-generator/totp-generator.component";

const routes: Routes = [{
  path: "", redirectTo: "/tools/list", pathMatch: "full"
}, {
  path : "tools/list", component : ToolsListComponent
},{
  path:"tools/json-formatter", component: JSONFormatterComponent
}, {
  path:"tools/json-parser", component: JSONParserComponent
}, {
  path:"tools/hex-string-generator", component: HexStringGeneratorComponent
}, {
  path:"tools/url-encoder-decoder", component: UrlEncoderDecoderComponent
}, {
  path:"tools/url-encoder", component: UrlEncoderDecoderComponent
}, {
  path:"tools/base64-encoder", component: Base64EncoderDecoderComponent
}, {
  path:"tools/base64-decoder", component: Base64EncoderDecoderComponent
}, {
  path:"tools/text-diff-checker", component: TextDiffCheckerComponent
}, {
  path:"tools/regex-tester", component: RegexTesterComponent
}, {
  path:"tools/markdown-format", component: MarkdownFormatComponent
}, {
  path:"tools/totp-generator", component: TotpGeneratorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
