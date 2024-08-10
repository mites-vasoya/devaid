import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { JSONFormatterComponent } from './jsonformatter/jsonformatter.component';
import { JSONParserComponent } from './jsonparser/jsonparser.component';
import { HexStringGeneratorComponent } from './hex-string-generator/hex-string-generator.component';
import { UrlEncoderDecoderComponent } from './url-encoder-decoder/url-encoder-decoder.component';
import { Base64EncoderDecoderComponent } from './base64-encoder-decoder/base64-encoder-decoder.component';
import { TextDiffCheckerComponent } from './text-diff-checker/text-diff-checker.component';
import { RegexTesterComponent } from './regex-tester/regex-tester.component';
import { MarkdownFormatComponent } from './markdown-format/markdown-format.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ToolsListComponent,
    JSONFormatterComponent,
    JSONParserComponent,
    HexStringGeneratorComponent,
    UrlEncoderDecoderComponent,
    Base64EncoderDecoderComponent,
    TextDiffCheckerComponent,
    RegexTesterComponent,
    MarkdownFormatComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
