## A lightweight node.js API to access google trends data specifically for wine-merchant app

#### API Calls example format:
```
post_req_one = HTTParty.post(ENV['SERVER_URL'] + "/trends",
      body: {
        keyword_one: @wine.winemaker,
        keyword_two: @wine.wine_name,
        keyword_three: "natural wine"
      }.to_json,
      headers: { 'Content-Type' => 'application/json' }
    )
```



``` \# get 4 ish years of trending data 'natural wine'
    @wine_trends_data_one = []
    data_points_one = (120..((post_req_one["default"]["timelineData"].length) - 1)).to_a
```

#### Developer - peter mccall murray
