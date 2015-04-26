'use strict';

angular.module('trendsDeckApp')
  .factory('Scenes', function () {
    // Service logic
    // ...
    var cachedTrends = [];
    var Scenes = {};
    Scenes.test = [
        {id: 1, label: 'Retail', group: 1,  details:'lorem ipsum'},
        {id: 2, label: 'Cultural Undercurrents', details: 'Cultural Undercurrents', group: 1},
        {id: 3, label: 'Principle 3' , group: 1},
        {id: 4, label: 'Principle 4' , group: 1},
        {id: 5, label: 'Principle 5' , group: 1},
        {id: 6, label: 'Trend 6' , group: 1},
        {id: 7, label: 'Trend 7' , group: 1},
        {id: 8, label: 'Trend 8' , group: 1}
      ];
    Scenes.data = [
      {
        id: 0,
        group: 1,
        name: 'Cultural Undercurrents',
        desc: 'Cultural trends affecting human behavior and expectation across all categories',
        more: ['As Levi’s looks for ways to protect and propel its global leadership role, what is our point of view toward trends in general?','When must we lead and when can we follow?','How can we leverage the integrity of Levi’s DNA to innovate in unexpected ways?','What will make us a modern cultural icon for those who once knew us as such, and more importantly, for the next generation, whose definition and value of originality is unique?'],
        trends: [
          {
            id: 100,
            group: 1,
            name: 'New feminism: A more natural conversation',
            desc: 'As feminism’s message shifts from man-hating to girl-empowering, social media acts as a natural amplifier.',
            more: ['As a product that impacts how women feel, how can Levi’s naturally amplify the conversation?','How can Levi\'s naturally empower women?', 'Should Levi\'s emulate the natural, raw tone found on successful brands’ social feeds?'],
            examples: [
              {
                id: 1001,
                group: 1,
                title: 'Real aspirations',
                desc: 'More and more celebrities are redefining what polished means by putting their barefaced reality out there, like #iwokeuplikethis and Beyonce’s 7/11 video.',
                link: 'http://www.nydailynews.com/entertainment/music/beyonce-drops-surprise-music-video-7-11-article-1.2020002'
              },
              {
                id: 1002,
                group: 1,
                title: 'Spreading the word with less effort',
                desc: 'Sarah Silverman’s Pay Gap video ignites a viral conversation.',
                link: 'https://www.youtube.com/watch?v=Jz3khtAdwXo'
              },
              {
                id: 1003,
                group: 1,

                title: 'Starting them young',
                desc: 'Young girls around the world are changing the definition of #likeagirl. And "GoldieBlox champions girl coders."',
                link: 'http://www.adweek.com/adfreak/always-unveils-girl-sequel-showing-girls-redefining-phrase-real-163249'
              }
            ],

          },
          {
            id: 200,
            group: 1,
            name: 'Gen Z: Nearly normal',
            desc: 'The next generation was born into a multicultural, digital world; the impact will be huge.',
            more: ['How can we begin translating our timeless, tangible product into a future built by connected kids?', 'Without losing the lifestyle brand and tangible product experience unique to Levi\’s?'],
            examples: [
              {
                group: 1,
                id: 2001,
                title: 'Coding playdates',
                desc: 'Thanks to Little Bits, completely normal kids are connecting household objects to circuit boards.',
                link: 'http://geekdad.com/2013/07/fun-with-littlebits/'
              },
              {
                id: 2002,
                group: 1,
                title: 'Social media is a real place',
                desc: 'AT&T\’s Facebook campaign helped kids build a case for why they should get a 4G smartphone, and earned 12m impressions worth $1.5m.',
                link: 'http://www.sapient.com/content/dam/sapient/sapientnitro/pdfs/insights/TR1_GenZ.pdf'
              },
              {
                id: 2003,
                group: 1,
                title: 'Emotional digital',
                desc: 'Gen Z\’s emotional dependence on their digital connections is a key trait not seen in any other generation.',
                link: 'http://www.sapient.com/content/dam/sapient/sapientnitro/pdfs/insights/TR1_GenZ.pdf'
              }

            ]
          },
          {
            id: 300,
            group: 1,
            name: 'Save our subcultures',
            desc: 'People used to earn their right to be part of a subculture — punk, goth, or cowboy. Now, it\’s just a quick outfit change.',
            more: ['As a brand born from subcultures, what role can we play to authentically honor and inspire the real thing', 'What is the modern way to embrace self-expression?', 'How might we become not just a champion of it, but a leader?'],
            examples: [
              {
                group: 1,
                id: 3001,
                title: 'Quick discovery dilutes subcultures, quickly',
                desc: 'Social media surfaces the strange, makes niche noticeable, and allows anyone to copy-paste.',
                link: 'https://www.vice.com/en_uk/read/when-do-we-give-up-on-our-scenes'
              },
              {
                group: 1,
                id: 3002,
                title: 'Celebrating the real thing',
                desc: 'Marc Jacobs made 3 documentary fashion films to authentically highlight self- expression and its subcultures.',
                link: 'http://shelbysells.com/2014/10/23/marc-jacobs-tribes-greasers-and-pin-ups-in-east-la/'
              },
              {
                group: 1,
                id: 3003,
                title: 'Copying the real thing',
                desc: 'When Gap tried to copy-paste the people’s normcore trend into a mass campaign, it "drove sales down 4%."',
                link: 'http://jezebel.com/gaps-blah-dress-normal-campaign-doesnt-get-the-irony-o-1649345286'
              }
            ]            
          },
          {
            id: 400,
            group: 1,
            name: 'Better way business',
            desc: 'CRM initiatives have evolved from paragraphs on About Us pages to business models making a real difference.',
            more: ['With a proven track record in doing the right thing, what should Levi’s do to continue its leadership in a modern context?', 'Now that sustainability is not a niche notion but a mass concern, what can Levi’s do to push the edges of the bell curve?'],
            examples: [
              {
                group: 1,
                id: 4001,
                title: 'A sustainable difference',
                desc: 'Patagonia continues to push the limits of sustainability, and is finding new and meaningful ways to involve the masses.',
                link: 'https://futurevision.rga.com/2015/04/patagonia-goes-on-tour-to-promote-sustainability/',
              },
              {
                group: 1,
                id: 4002,
                title: 'Reforming girls\' fashion',
                desc: 'Reformation clothing boomed from niche to mainstream this year with eco-friendly and vintage fabrics at the helm.',
                link: 'http://www.nytimes.com/2014/12/18/style/reformation-an-eco-label-the-cool-girls-pick.html?_r=1',
              },
              {
                group: 1,
                id: 4003,
                title: 'Transparency marketing',
                desc: 'When McDonald’s launched 2014’s “Our food, your questions” they had to be prepared for every question.',
                link: 'http://www.fastcoexist.com/3044195/3-ways-brands-can-use-corporate-social-responsibility-principles-to-create-better-advertisin',
              }
            ]            
          },
          {
            id: 500,
            group: 1,
            name: 'Up close & personal',
            desc: 'Social media has given people access to the previously- private. Now, we expect access to celebrity family vacations and “frow” at fashion week.',
            more: ['What kind of access do people want from the Levi’s brand, products, and featured artists?', 'How can we be ahead of the curve and define what kind of access customers can/should expect of brands in general? Of clothing manufacturers?'],
            examples: [
              {
                group: 1,
                id: 5001,
                title: 'Industry access',
                desc: 'Bloggers bridged the gap between the “people” and the runway. Now fashion houses play the game.',
                link: 'http://nymag.com/thecut/2014/04/golden-era-of-fashion-blogging-is-over.html'
              },
              {
                group: 1,
                id: 5002,
                title: 'Early access',
                desc: 'At London FW in Feb, Topshop and Twitter analyzed social data in real time to guide e-commerce merchandise, giving early access to Vine viewers.',
                link: 'http://www.independent.co.uk/life-style/fashion/news/topshop-and-twitter-team-up-to-allow-users-to-shop-london-fashion-week-trends-live-10054032.html'
              },
              {
                group: 1,
                id: 5003,
                title: 'Real access',
                desc: 'Now, we know what Alexa Chung is wearing because we follow her friends on Instagram, not because we Google her.',
              }
            ]            
          }
        ]
      },
      {
        id: 1,
        group: 1,
        name: 'Omnichannel',
        desc: 'Collecting and leveraging shopper data to serve up increasingly seamless and personalized shopping experiences to everyone who wants in.',
        more: ['As we look to build the infrastructure for Levi’s integrated/omnichannel future, what are some big, iconic gestures we can put out there to prove we’re modern in our own authentic way?', 'Let’s build our omnichannel “moral compass” to guide our decisions and prove to the world that we are not just a jeans brand, we are a modern cultural icon.'],
        trends: [
          {
            id: 11,
            group: 1,
            name: 'Building while flying',
            desc: 'N/A',
            more: ['Knowing there is no such thing as perfect, where should/could Levi’s begin?', 'What data points already exist that we can connect?'],
            examples: [
              {
                group: 1,
                id: 111,
                title: 'Just getting started',
                desc: 'Forrester found that that only 6% of US/EU retailers reported “no significant barriers” to becoming an integrated omni-channel company. Barriers include internal technology challenges, organizational silos, and poor operational execution.',
                link: 'http://www.accenture.com/SiteCollectionDocuments/Accenture-Customer-Desires-VS-Retailer-Capabilities.pdf',
              },
              {
                group: 1,
                id: 112,
                title: 'N/A',
                desc: 'Once just a shopping mall conglomerate, Westfield Labs is a global digital lab focused on innovating the retail ecosystem.',
                link: 'http://www.westfieldlabs.com',
              },
              {
                group: 1,
                id: 113,
                title: 'N/A',
                desc: 'Sephora’s Innovation Lab is developing and testing shopping technologies in hopes of defining the future of omnichannel. Meanwhile Kate Spade "Saturday’s" has been iterating since 2013.',
                link: 'http://www.cosmeticsdesign.com/Business-Financial/Sephora-effect-beauty-retailer-changing-the-game-in-the-US',
              }
            ]
          },
          {
            id: 12,
            group: 1,
            name: 'Ecosystems, not tactics',
            desc: 'Harvesting data isn’t enough. Connecting it all around the customer defines the next generation of retail success.',
            more: ['What do we really want to learn about our customers?', 'How can we make Levi’s data-driven without sacrificing its DNA?'],
            examples: [
              {
                group: 1,
                id: 121,
                title: 'Contextual information',
                desc: 'Ikea uses beacon data to enhance the in-store experience with product storytelling, way-finding, and easy payment and delivery systems.',
                link: 'http://www.psfk.com/2014/11/importance-storytelling-driving-contextual-relevant-store-experiences-psfk-future-retail-nyc.html',
              },
              {
                group: 1,
                id: 122,
                title: 'Know your loyalists',
                desc: 'Swan Centre’s beacon-enabled app gives customers loyalty points upon entering; centre tracks shopping behavior.',
                link: 'http://internetretailing.net/2014/03/hampshire-shopping-centre-becomes-first-in-uk-to-use-beacons-to-deliver-targeted-promos-to-shoppers/',
              },
              {
                group: 1,
                id: 123,
                title: 'Customer service reimagined',
                desc: 'Swindon’s customers scan barcodes which serves up info, alerting sales associates to the activity and informs their approach.',
                link: 'http://blog.mobstac.com/2015/03/beacons-and-big-data-the-new-power-couple-in-retail/',
              }
            ]
          },
          {
            id: 13,
            group: 1,
            name: 'Mobile: Payments or platforms?',
            desc: 'Mobile wallets are "redefining" loyalty, and elevate its perks.',
            more: ['If mobile is the reason omnichannel exists in the first place, how can we use mobile to keep our customers in-store? And leverage mobile to make them feel more confident about their purchase?'],
            examples: [
              {
                group: 1,
                id: 131,
                title: 'Consolidated payments',
                desc: 'Retailers are clamoring to get a piece of WeChat’s m-commerce. 2 million people used it to pay for taxi rides in just one day in February.',
                link: 'http://www.igt.in/blog/the-wechat-m-commerce-travel-opportunity-or-flight-of-fancy/'
              },
              {
                group: 1,
                id: 132,
                title: 'Individually branded mobile loyalty programs',
                desc: 'Kohl’s is going above and beyond couponing, resulting in customers with the app making two extra trips to the store and spending an incremental $80 per year.',
                link: 'http://blogs.wsj.com/cio/2015/01/26/the-next-step-for-the-mobile-wallet-loyalty-programs/'
              },
              {
                group: 1,
                id: 133,
                title: 'Aggregate mobile loyalty programs',
                desc: 'Starbucks is toying with the dream to put all loyalty programs and points under "one roof" with the goal of total consumer control and efficiency, while "new companies like Dealyze" act as customizable apps for B2B.',
                link: 'http://blogs.wsj.com/cio/2015/01/23/starbucks-coo-hire-reflects-grande-tech-goals/'
              }
            ]
          },
          {
            id: 14,
            group: 1,
            name: 'Redefining value',
            desc: 'New models require consumers to share information in exchange for value.',
            more: ['How can Levi’s redefine value?', 'How can we give shoppers a more active role in their experience?',  'How can we translate shopper data into new innovations?'],
            examples: [
              {
                group: 1,
                id: 141,
                title: 'Curated subscriptions',
                desc: 'Stitch Fix sends you its stylist-approved products based on body type and provided style preferences.',
                link: 'http://www.fastcompany.com/3025642/getting-their-fix'
              },
              {
                group: 1,
                id: 142,
                title: 'Customer profiling',
                desc: 'Sephora’s VIB program uses customer data to file individuals’ skin type, tone, even preferred scents, to serve up an increasingly personalized in-store experience every single time.',
                link: 'http://www.fastcompany.com/3043166/most-creative-people/first-look-inside-sephoras-new-innovation-lab'
              },
              {
                group: 1,
                id: 143,
                title: 'Personal showrooms',
                desc: 'Users create online personal profiles where they receive personalized product recommendations based on their size and favorite labels.',
                link: 'N/A'
              },

            ]
          },
          {
            id: 15,
            group: 1,
            name: 'Pricing as brand expression',
            desc: 'Dynamic pricing isn’t just about matching the lowest price; it’s an opportunity to tailor for individual shoppers.',
            more: ['Looking at this as a communication channel, how might Levi’s cleverly communicate quality through dynamic pricing? Other points of difference?'],
            examples: [
              {
                group: 1,
                id: 151,
                title: 'N/A',
                desc: '"IDC retail insights" predict that by the end of 2016, product intelligence will inform 90% of pricing decisions made by the top 10 e-commerce retailers. Currently, 42% of U.S. consumers think retailers are offering different prices online and offline',
                link: 'TBD- "IDC retail insights" link may be the title link.'
              },
              {
                group: 1,
                id: 152,
                title: 'So far, no best practices',
                desc: 'The monster model "Amazon" changes its pricing every 10 minutes on average. Whereas high-end models, like Intermix or Neiman Marcus, might not give hard discounts but a gift card to come back.',
                link: ''
              }
            ]
          }
        ]
      },
      {
        id: 2,
        group: 1,
        name: 'E-Commerce + POS',
        desc: 'Closing the gap between inspiration and gratification.',
        more: ['Knowing that consumers have increasingly high design and intelligence demands from brands, what can Levi’s do to stay ahead of those expectations in ecommerce?', 'Where is the one pain point (internally and for shoppers) that we can fix and build an alluring ecommerce structure around?'],
        trends: [
          {
            id: 20,
            group: 1,
            name: 'Shoppable everything, everywhere',
            desc: 'Understanding shopping behavior to eliminate slack between inspiration and gratification.',
            more: ['Where is the slack between inspiration and gratification for Levi’s shoppers?', 'How can we make the shopping experience as natural and authentic as possible?'],
            examples: [
              {
                group: 1,
                id: 201,
                title: 'Shoppable storefronts',
                desc: 'Interactive screens from the likes of Tom’s, Adidas, and Rebecca Minkoff allow shoppers to explore and play with products for immediate or later purchase.',
                link: 'http://blog.ebay.com/ebay-inc-and-kate-spade-saturdays-partner-for-interactive-storefronts/',
              },
              {
                group: 1,
                id: 202,
                title: 'N/A',
                desc: 'Once just a shopping mall conglomerate, Westfield Labs is a global digital lab focused on innovating the retail ecosystem.',
                link: 'http://www.westfieldlabs.com',
              },
              {
                group: 1,
                id: 203,
                title: 'N/A',
                desc: 'Sephora’s Innovation Lab is developing and testing shopping technologies in hopes of defining the future of omnichannel. Meanwhile Kate Spade "Saturday’s" has been iterating since 2013.',
                link: 'http://www.cosmeticsdesign.com/Business-Financial/Sephora-effect-beauty-retailer-changing-the-game-in-the-US',
              }
            ]
          },
          {
            id: 21,
            group: 1,
            name: 'Product threads',
            desc: 'Giving brands a more meaningful role in the stories we all weave, consumers and brands alike.',
            more: ['What social and editorial trends could Levi’s leapfrog to become a leader in product integration?', 'What can we leverage about denim’s natural integration in culture and outfits to make it authentic?'],
            examples: [
              {
                group: 1,
                id: 211,
                title: 'Brand-tagging editorial',
                desc: 'Shoppable stories done well, like Net-a-Porter\'s innovation 3 years ago, are now increasingly expected.',
                link: 'http://www.mrporter.com',
              },
              {
                group: 1,
                id: 212,
                title: 'Brand-tagging social',
                desc: 'Social innovations like Like2Buy and China’s Pinco help those looking for inspiration find precisely what they just fell in love with.',
                link: 'http://www.creativehunt.com/shanghai/articles/nice-and-pinco-brand-tagging-apps',
              }
            ]
          },
          {
            id: 22,
            group: 1,
            name: 'Ecomm goes local',
            desc: 'Cleverly converting ecommerce by playing into the cultural need for control.',
            more: ['In ecommerce and beyond, how can Levi’s localize the shopping experience?','Is this an opportunity to plus our knowledge of markets and connect to subcultures?'],
            examples: [
              {
                group: 1,
                id: 221,
                title: 'Local inventory finders',
                desc: 'Streethub users browse, purchase in-app, pick up in-store or have items delivered in 1-2 hours.',
                link: 'http://www.psfk.com/2015/02/braintree-cross-channel-purchases-walgreens-stocknearby-streethub.html',
              },
              {
                group: 1,
                id: 222,
                title: 'Local express delivery',
                desc: 'Known for food delivery, Postmates partnered with Everlane to deliver online orders within 1 hour.',
                link: 'http://www.luxurydaily.com/net-a-porter-targeted-last-minute-shoppers-with-same-day-delivery/',
              },
              {
                group: 1,
                id: 223,
                title: 'Click + collect',
                desc: 'Customers find items online to reserve in-store for later pickup, tying the on- and offline shopping cart together. Macy\'s customers spend 125% more of their intended order.',
                link: 'http://www.mediapost.com/publications/article/233422/macys-focused-on-mobile-gen-y-private-label.html',
              }
            ]
          },
          {
            id: 23,
            group: 1,
            name: 'Native shopping',
            desc: 'Blending into where people already are stands to make shopping more natural than ever.',
            more: ['Knowing that current solutions are still clunky, how can Levi’s pave its own way into a more natural experience?', 'What data can we harvest about the nature of shopping for jeans? It might just be a matter of placing what we already know in a modern, digital context.'],
            examples: [
              {
                group: 1,
                id: 231,
                title: 'Shoppable feeds',
                desc: 'Like2Buy + Instagram integration is still clunky, but attempts to link inspiration to purchase.',
                link: 'http://www.forbes.com/sites/clareoconnor/2014/08/28/buy-what-you-like-you-can-now-shop-straight-from-instagram/',
              },
              {
                group: 1,
                id: 232,
                title: 'Shoppable events',
                desc: 'Burberry was the first to leverage Twitter’s BUY button, creating seamless transitions from IRL to social content to full shopping carts.',
                link: 'www.vogue.co.uk/news/2014/09/09/twitter-launches-buy-button-with-burberry',
              },
              {
                group: 1,
                id: 233,
                title: 'Shoppable home',
                desc: 'Amazon’s Dash Buttons make it easier than ever to replenish what you use the most.',
                link: 'http://www.psfk.com/2015/04/amazon-dash-button-products-at-push-of-a-button-amazon-prime.html',
              }
            ]
          },
          {
            id: 24,
            group: 1,
            name: 'Online tailoring',
            desc: 'Tailoring not only clothes, but the entire online shopping experience around the customer is to take the guesswork out of online shopping.',
            more: ['How can Levi’s leverage this trend to better intersect staples with self- expression?', 'How can we help our shoppers understand the evergreen value of our products?'],
            examples: [
              {
                group: 1,
                id: 241,
                title: 'Virtually tailor-made',
                desc: 'By perfecting online sizing, Institchu took the Australian market by storm and is now expanding ways to get the perfect suit to the UK and US.',
                link: 'http://www.forbes.com/sites/chrystanpaul/2014/05/26/australias-institchu-looks-to-alter-bespoke-menswear-with-online-tailoring/',
              },
              {
                group: 1,
                id: 242,
                title: 'Exclusive on exclusive',
                desc: 'Tinker Tailor offers virtual customization of already exclusive designs. Whereas "Ecole" strips away the unnecessary, focusing on styling staples that work every season in new and interesting ways.',
                link: 'http://www.tinkertailor.com',
              },
              {
                group: 1,
                id: 243,
                title: 'Tailored by use',
                desc: 'Harry’s creates a subscription service with shave plans using data from repeat purchase.',
                link: 'https://www.harrys.com/auto-refill',
              }
            ]
          },
          {
            id: 25,
            group: 1,
            name: 'Try before buy',
            desc: 'Giving the consumer the feeling of complete control.',
            more: ['Knowing that “trying is believing,” how can Levi’s leverage this trend to express its authority in denim and fit?', 'These models aren’t without their logistical challenges, but what are we willing to give up in favor of our customers’ brand and product love?'],
            examples: [
              {
                group: 1,
                id: 251,
                title: 'Virtual try-on',
                desc: 'Warby Parker allows customers to upload a photo to see how things will look on them before shipping a trial variety to their home.',
                link: 'http://www.fastcompany.com/3041334/most-innovative-companies-2015/warby-parker-sees-the-future-of-retail',
              },
              {
                group: 1,
                id: 252,
                title: 'Home try-on',
                desc: 'For $1 per pair, women can find the perfect fitting jeans in the comfort of their own home.',
                link: 'https://ayr.com',
              }
            ]
          }
        ]
      },
      {
        id: 3,
        group: 1,
        name: 'In-Store Experience',
        desc: 'Creating a more entertaining and useful in-store experience for shoppers.',
        more: ['Retailers have only just scratched the surface of what’s possible in digitizing the in-store experience. As a leader, not a follower, should we develop an internal compass to assist us in decision-making along the way?', 
               'Is it better to start with innovative customer research to further support what we know about the customer journey? Or to take an iterative approach, developing and launching in-store beta tests in local markets?'],
        trends: [
          {
            id: 30,
            group: 1,
            name: 'Beacons for real',
            desc: 'If data is the new oil, in-store beacons are the retailer’s rig.',
            more: ['Even if Levi’s doesn’t want to jump into the price knife-fight, how can we partner with related apps to give us a leg up on the competition?', 'How can we leverage our regional knowledge to make this a success?'],
            examples: [
              {
                group: 1,
                id: 301,
                title: 'Proactive deal-finding',
                desc: 'China’s Glammapp is a location-based bargain hunter for women’s apparel.',
                link: 'https://www.techinasia.com/glammap-location-based-fashion-deal-bargain-in-china/'
              },
              {
                group: 1,
                id: 302,
                title: 'Brick+mortar magnet',
                desc: 'Shopkick users see best products and deals nearby and earn points for free gift cards for walking into stores (using ShopBeacon technology). It has earned $1B in revenue for its partners since 2010.',
                link: 'http://bostinno.streetwise.co/2014/10/15/report-shopkicks-ibeacons-drov-1b-in-revenue/'
              }
            ]
          },
          {
            id: 31,
            group: 1,
            name: 'Rethinking display',
            desc: 'Display and merchandising will quickly transition from static to interactive.',
            more: ['How could Levi’s leverage its unique pain points to create a more entertaining, usable, and well-serviced space?', 'Can we creatively incorporate the tactile nature of denim in a purely digital experience?'],
            examples: [
              {
                group: 1,
                id: 311,
                title: 'Educational display',
                desc: 'Tesla’s digital merchandising is interactive, instructive, and interesting. A pivotal tool in transitioning attitudes toward electric vehicles.',
                link: 'http://www.nurun.com/en/case-studies/tesla-motors-retail-kiosks/'
              },
              {
                group: 1,
                id: 312,
                title: 'Connected display',
                desc: 'Rebecca Minkoff’s ‘connected wall’ lets shoppers explore a look book, choose a complementary beverage and have a fitting room stocked with preferred items.',
                link: 'http://mainstreetinc.net/bricks-clicks-online-merchants-disrupt-traditional-retail-stores/'
              }
            ]
          },
          {
            id: 32,
            group: 1,
            name: 'Modern fit',
            desc: 'In-store tailoring has gone next level, with body-scanning. But is it working?',
            more: ['We already have Truefit and MeAlity tests in motion, but what is the Levi’s way to help people find the perfect fit? And how do we fold it into the service experience?', 'Do we care about retaining “the human touch”?'],
            examples: [
              {
                group: 1,
                id: 321,
                title: 'Narrowing it down',
                desc: 'The Jenius Bar in Selfridges houses an overwhelming 52 denim designers, but the Fit Studio enables an experience to distill brand, style, and fit. They also have a tailor on- site.',
                link: 'http://retaildesignblog.net/2013/07/18/selfridges-denim-studio-by-hmkm-london/'
              },
              {
                group: 1,
                id: 322,
                title: 'N/A',
                desc: '"Sephora\'s Color IQ" finds your perfect match from over 1500 formulas, keep your IQ on file so you can easily shop it in-store or online.',
                link: 'TBD'
              },
              {
                group: 1,
                id: 323,
                title: 'Digital bespoke',
                desc: '3D body scans at NYC’s Acustom Apparel reveals a holographic representation of your body based on 200 raw data points that extract thousands of measurements.',
                link: 'http://retaildesignblog.net/2014/11/27/bespoke-stores-acustom-apparel-store-new-york-city/'
              }
            ]
          },
          {
            id: 33,
            group: 1,
            name: 'Immersive retail',
            desc: 'In-store experiences are key, as shoppers will only “make the trip” for good reason.',
            more: ['How can Levi’s capitalize on this trend to propel its position as cultural maven?','What experiences could we spark in denim, music, beyond?'],
            examples: [
              {
                group: 1,
                id: 331,
                title: 'Product immersion',
                desc: 'HWKR architecture firm designed a retail factory for Normal’s 3D printed headphones.',
                link: 'http://www.designboom.com/architecture/hwkn-hybrid-factory-3d-printing-normal/'
              },
              {
                group: 1,
                id: 332,
                title: 'Lifestyle spaces',
                desc: 'Comfortable and engaging store spaces build brand affinity and encourage customers to spend more time in-store. "Urban Outfitters Space Ninety 8" is a marketplace, record store, and a restaurant that was voted best NYC restaurant by Gawker. "LuluLemon" sportswear stores offer complimentary yoga classes.  "Tokyo’s Evisu Concept Store" showcases London graffiti artists, individual customization projects, a brand heritage gallery, and a bar.',
                link: 'http://gawker.com/the-best-restaurant-in-new-york-is-the-williamsburg-ur-1617681735'
              }
            ]
          },
          {
            id: 34,
            group: 1,
            name: 'Virtual fitting rooms',
            desc: 'While virtual fitting rooms mitigate pain points, retailers continue experimenting to make it feel as natural as possible.',
            more: ['Could Levi’s learn from this trend to solve some of its fit/ style issues, specifically with the women’s line? Both from an R&D and customer experience perspective?'],
            examples: [
              {
                group: 1,
                id: 341,
                title: 'Eliminating inventory',
                desc: 'Japan’s Urban Research: 7 square- meters that carries no stock.',
                link: 'http://www.businessoffashion.com/articles/fashion-tech/japan-urban-research-experiments-virtual-changing-booths'
              },
              {
                group: 1,
                id: 342,
                title: 'Industry access',
                desc: 'Kohls and Bloomingdale’s are connecting the fitting room to the digital inventory system.',
                link: 'http://www.realityi.com/2014/11/13/3-retailers-go-high-tech-smart-fitting-rooms/'
              },
              {
                group: 1,
                id: 343,
                title: 'Fashon first, then tech',
                desc: 'Minkoff’s project uses RFID tags in clothes to activate a multi- faceted digital mirror experience.',
                link: 'http://www.fastcocreate.com/3041516/master-class/mirror-mirror'
              }
            ]
          },
          {
            id: 35,
            group: 1,
            name: 'Better payments',
            desc: 'The cash register is disappearing altogether. Three of the world’s most developed markets had "the highest spend of proximity mobile payments" on a per capita basis in 2014: Australia (US $22); the U.S. (US$16); and the U.K. (US $12).',
            more: ['When payment is no longer a chunk of the in-store experience, what will Levi’s put in its stead?', 'How can we assume a leadership position and still meet the demands of so many different mobile payment platforms?'],
            examples: [
              {
                group: 1,
                id: 351,
                title: 'From niche to mass in a year',
                desc: 'While "Japan" had a wallet phone as early as 2008, now global integrated systems have arrived on platforms with hundreds of millions of users.',
                link: 'http://www.dailytech.com/Google+Readies+Gmail+Pony+Express+to+Combat+Facebooks+Messenger+Payments/article37269.htm'
              },
              {
                group: 1,
                id: 352,
                title: 'N/A',
                desc: 'WeChat just made nearly anything available for in-app purchase, both online and in-store.',
                link: 'https://www.techinasia.com/wechat-adds-payment-support-for-brands-and-retailers/'
              },
              {
                group: 1,
                id: 353,
                title: 'The year of Apple Pay',
                desc: '$2 out of every $3 spent on m-commerce is using Apple Pay. While "P2P payment" is the hottest topic in finance.',
                link: 'http://www.macworld.com/article/2834669/the-ultimate-guide-on-how-and-where-to-use-apple-pay.html'
              }
            ]
          },
        ]
      }
    ];

    var getScenes = function() {
      return Scenes;
    };
   
    var getTrends = function() {

      return cachedTrends = Scenes.data.reduce(function(prev, curr) {
        return prev.concat(curr.trends);
      }, []);
      
    };

    var getExamples = function() {
      if(cachedTrends.length){
        return cachedTrends.reduce(function(prev, curr) {
          return prev.concat(curr.examples);
        }, []);
      }
      
      
    };
    // Public API here
    return {
      getSceneData: function () {
        return getScenes();
      },
      getTrendData: function () {
        return getTrends();
      },
      getExampleData: function () {
        return getExamples();
      }
    };
  });
