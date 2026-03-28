{
  "key": "pornavhd",
  "name": "PornAVHD",
  "type": 3,
  "api": "csp_XPathMacFilter",
  "searchable": 1,
  "quickSearch": 1,
  "filterable": 1,
  "ext": {
    "ua": "Mozilla/5.0",
    "homeUrl": "https://pornavhd.com/",

    "cateManual": {
      "Newest": "/?filter=latest",
      "Best": "/?filter=popular",
      "Most Viewed": "/?filter=most-viewed",
      "Longest": "/?filter=longest",
      "Random": "/?filter=random"
    },

    "homeVodNode": "//article[contains(@class,'video-preview-item')]",
    "homeVodName": ".//span[contains(@class,'title')]/text()",
    "homeVodId": ".//a/@href",
    "homeVodImg": ".//img[contains(@class,'video-main-thumb')]/@src",
    "homeVodMark": ".//span[contains(@class,'duration')]/text()",

    "cateUrl": "https://pornavhd.com{cateId}&page={catePg}",
    "cateVodNode": "//article[contains(@class,'video-preview-item')]",
    "cateVodName": ".//span[contains(@class,'title')]/text()",
    "cateVodId": ".//a/@href",
    "cateVodImg": ".//img[contains(@class,'video-main-thumb')]/@src",
    "cateVodMark": ".//span[contains(@class,'duration')]/text()",

    "dtUrl": "{vid}",
    "dtNode": "//article[contains(@class,'post')]",
    "dtName": "//h1/text()",
    "dtImg": "//meta[@itemprop='thumbnailUrl']/@content",
    "dtDesc": "//div[contains(@class,'entry-content')]//p/text()",

    "dtFromNode": "//div[@class='responsive-player']",
    "dtFromName": "Default",

    "dtUrlNode": "//div[@class='responsive-player']//iframe",
    "dtUrlId": "./@src",
    "dtUrlName": "Play",

    "playUrl": "{playUrl}",

    "searchUrl": "https://pornavhd.com/?s={wd}&page={pg}",
    "scVodNode": "//article[contains(@class,'video-preview-item')]",
    "scVodName": ".//span[contains(@class,'title')]/text()",
    "scVodId": ".//a/@href",
    "scVodImg": ".//img[contains(@class,'video-main-thumb')]/@src",
    "scVodMark": ".//span[contains(@class,'duration')]/text()"
  }
}
