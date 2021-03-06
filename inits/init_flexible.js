{
  selector: "%SELECTOR%",
  theme: "modern",
  skin: "lightgray",
  toolbar_items_size: "small",
  menubar:false,
  plugins: [
    "advlist anchor autolink autosave charmap code colorpicker contextmenu emoticons fullscreen hr",
    "image importcss insertdatetime link lists media nonbreaking paste",
    "save searchreplace table textcolor visualblocks visualchars wordcount"
  ],
  toolbar: "save | fullscreen | code | formatselect | fontselect | fontsizeselect | styleselect | bold | italic | underline | strikethrough | alignleft |aligncenter | alignright | alignjustify | cut | copy | paste | pastetext | bullist | numlist | outdent | indent | blockquote | undo | redo | link | unlink |anchor | image | media | hr | nonbreaking | removeformat | visualblocks | visualchars | forecolor | backcolor | searchreplace | charmap | emoticons | subscript | superscript | table | inserttime",
  image_advtab: true,
  image_title: true,
  file_browser_callback : "%FILEBROWSER_CALLBACK%",
  content_css: "%STYLESHEET%",
  importcss_append:true,
  importcss_selector_filter: /(?:([a-z0-9\-_]+))(\.[a-z0-9_\-\.]+)$/i,
// %LANGUAGE% = language:"en" (fallback) or language_url = path to tinymce language file (in regard to the TinyMCE CDN Variant  
  %LANGUAGE%
  element_format: "%ELEMENT_FORMAT%",
// %PAGEHEADERS% = h1...hx for new pages, %NAMED_PAGEHEADERS% =  1. Level pageheader=h1 ...hx, %HEADERS% = remaining hy...h6
  block_formats: "%HEADERS%;p=p;div=div;%NAMED_PAGEHEADERS%;code=code;pre=pre;dt=dt;dd=dd",
  insertdatetime_formats: ["%H:%M:%S", "%d.%m.%Y", "%I:%M:%S %p", "%D"],
  relative_urls: true,
  convert_urls: false,
  entity_encoding: "raw"
}
