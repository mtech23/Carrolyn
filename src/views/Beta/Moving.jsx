import React, { useState, useEffect } from "react";
import { movingStepbox, cartIcon } from "../../../public/images";

const MovingSection = () => {
  const [bookDetail, bookDetailData] = useState({});
  const bookDataArray = [
    {
      id: 1,
      head: "Spot On!",
      desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
      completedDescription: [
        "Over the past few years, Lynn has taken many dogs in her rescue. Going through a lot of struggles to find the best-suited home for them, Lynn begins to wonder how the story starts — how can she save all of them. Even after giving homes to a lot of dogs, the stream of suffering dogs appears endless. Seized by the need to act, Lynn join hand with her best friend to import distressed dogs from China and Turkey to provide them a suitable shelter for them. What she discovers further breaks her heart and compels her to shares her story in the hope of changing this world.",
        "In this book, Lynn shares stories of the amazing dogs that she has rescued and brought to loving families after dealing with the most notorious dog traffickers in the USA. This book offers invaluable guidance and wisdom for anyone who feels for these innocent fur babies. It is a heartwarming story of the man-and-dog team behind the rescues of the helpless dogs. The work was not easy at all. But through it all, Lynn shares an enduring and affectionate bond with other characters in the story, which is more than a working relationship. Lynn becomes Sherlock for the missing animals inside Austin.",
        "This book is a soulful tribute to abandoned dogs of all breeds and will appeal to every animal lover around the globe. The author has tried to recreate events, locales, and conversations using her creative flair. It’s about finding your own way to light a candle instead of sitting inside the darkness. We have rescued a number of dogs together, and we hope to change the landscape of rescue with this book forever.",
      ],
      img: "book-card-img-1-revised",
      trailer: "SpotOnCanineBabies-Trailer",
      link: "B096X6HH4B/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1",
      paperback: "8.99",
      hardcover: "",
      ebook: "3.99",
      slug: "spot-on-mystery-at-the-dog-rescue",
    },
    {
      id: 2,
      head: "Spot On!",
      desc: "In this second book in the Spot On series, join Lynn and her rescue dogs for another adventure. Animals go through some terrible things in order to survive on their own, which is why Lynn’s rescues are so beloved. This time, they go to Mexico, where a mystery causes chaos at the dog rescue. A scandal evolves. Meanwhile, Lynn is on vacation. Their investigation takes them to New York City’s Chinatown where they must stand...",
      completedDescription: [
        "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.",
        "It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets. Their investigation takes them to New York City’s Chinatown where they must stand up to the Chinese mob.",
        "Lynn will not back down. She will find her rescue dogs and maybe even solve a murder in this adventure story about one woman’s love for fur babies and the lengths she will go to save them.",
      ],
      img: "book-card-img-2",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B096TSVMX7/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2",
      paperback: "11.99",
      hardcover: "28.95",
      ebook: "3.99",
      slug: "spot-on-chaos-at-the-dog-rescue",
    },
    {
      id: 3,
      head: "Canine Babies",
      desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try. As Lynn and Maryanne carry out their own investigations, the case becomes increasingly personal. Long-submerged secrets surface as Lynn teams up with the cops to solve the puzzle before a cunning killer claims another victim...",
      completedDescription: [
        "In this second book in the Spot On series, join Lynn and her rescue dogs for another adventure. Animals go through some terrible things in order to survive on their own, which is why Lynn’s rescues are so beloved.",
        "This time, they go to Mexico, where a mystery causes chaos at the dog rescue. A scandal evolves. Meanwhile, Lynn is on vacation, hoping to swim and water ski. Instead, she is confronted with unexpected intrigue.",
        "Lynn is once again on the case as she rescues some skinny and dehydrated dogs from Mexico. She plans to save them, and she won’t be stopped in her heartfelt mission.",
      ],
      img: "book-card-img-3",
      trailer: "SpotOnCanineBabies-Trailer",
      link: "B096YJ5FZ4/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4",
      paperback: "10.50",
      hardcover: "",
      ebook: "9.99",
      slug: "spot-on-canine-babies-at-the-dog-rescue",
      reviews: [
        {
          authorName: "Gregory Charles",
          description:
            "'Lynn's fearless determination and Maryanne's unwavering support made for a thrilling and heartwarming journey. The plot twists and long-submerged secrets had me on the edge of my seat, eagerly turning each page to uncover the truth. Highly recommend!",
        },
        {
          authorName: "Alain Jason",
          description:
            "The kidnapping and murder plot added an intense layer of suspense, and as Lynn and Maryanne delved deeper into their investigations, I found myself caught up in their personal struggles and desperate to unravel the puzzle alongside them. A must-read for mystery lovers!",
        },
        {
          authorName: "Mike Haden",
          description:
            "'SPOT ON - Canine Babies At The Dog Rescue' touched my heart in ways I didn't expect. Lynn's dedication to her life's work and her fearlessness in the face of danger inspired me. The unfolding events, including the kidnapping and murder, kept me emotionally invested throughout. I felt a deep connection with the characters as they confronted long-hidden secrets, and I couldn't help but cheer them on. A truly moving read!",
        },
        {
          authorName: "Julie White",
          description:
            "Suspenseful From the moment I opened 'SPOT ON - Canine Babies At The Dog Rescue,' I was transported into a world of mystery and danger. Lynn's relentless pursuit of justice in the face of unimaginable circumstances kept me on the edge of my seat. The tension escalated with each page, and the unexpected plot twists had me gasping for breath. Prepare for a wild ride!",
        },
        {
          authorName: "Christian Black",
          description:
            "'SPOT ON - Canine Babies At The Dog Rescue' intrigued me with its blend of crime-solving and personal connections. Lynn's unwavering focus on the case, despite her own emotional struggles, made for a compelling protagonist. The gradually unraveling secrets kept me guessing until the very end. A thought-provoking and engaging read!",
        },
        {
          authorName: "Rebecca Louis",
          description:
            "This book touched my heart deeply. Lynn's dedication to her work and her genuine care for the victims showcased the true essence of humanity. The interweaving of personal and professional challenges made the story all the more relatable, and I found myself rooting for Lynn and Maryanne throughout their investigations. An emotionally charged and inspiring read!",
        },
        {
          authorName: "Carolina Lee",
          description:
            "This book had me hooked from start to finish! Lynn's fearless attitude and determination to solve the puzzle were exhilarating. The rollercoaster of emotions, from heart-pounding suspense to heartwarming moments, kept me engaged throughout. A gripping and thrilling read that I couldn't put down!",
        },
        {
          authorName: "Eric Patrick",
          description:
            "This book 'SPOT ON - Canine Babies At The Dog Rescue' made me contemplate the strength of the human spirit. Lynn's resilience in the face of adversity and her willingness to confront long-buried secrets left a lasting impression on me. The intricate plot and the evolution of the characters kept me engrossed, prompting me to ponder the complexities of life. A thought-provoking and beautifully written book!",
        },
      ],
    },
    {
      id: 4,
      head: "Spot-on: Canines on a Cruise",
      desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
      completedDescription: [
        "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try.",
        "As Lynn and Maryanne carry out their own investigations, the case becomes increasingly personal. Long-submerged secrets surface as Lynn teams up with the cops to solve the puzzle before a cunning killer claims another victim.",
      ],
      img: "book-card-img-4",
      trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
      link: "B098W57CG1/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i3",
      paperback: "9.50",
      hardcover: "",
      ebook: "5.55",
      slug: "spot-on-canines-on-a-cruise-spots-legacy",
      reviews: [
        {
          authorName: "Christopher Goodwin",
          description:
            "'Spot On - Canines on a Cruise' is an absolute gem! The heartwarming tale of the couple's dog rescue mission had me captivated from start to finish. Kudos to Carolynn Tucciarone for bringing these furry heroes to life!",
        },
        {
          authorName: "Fred Parkston",
          description:
            "Reading 'Spot On - Canines on a Cruise' reminded me of the unconditional love and loyalty that dogs offer. This beautiful story transported me back to the moments I spent with my own beloved pets. Thank you, Carolynn Tucciarone, for evoking such heartfelt emotions.",
        },
        {
          authorName: "Mark Philip",
          description:
            "I am in awe of the incredible resilience showcased in 'Spot On - Canines on a Cruise.' The determination of the couple to rescue abandoned dogs, even from halfway across the world, is truly remarkable. This book has ignited a fire in my heart to make a difference.",
        },
        {
          authorName: "Shawn Walter",
          description:
            "'Spot On - Canines on a Cruise' is a touching portrayal of compassion and empathy. The author, Carolynn Tucciarone, masterfully captures the plight of abandoned fur babies and reminds us of our responsibility to care for these innocent creatures. A must-read for all animal lovers",
        },
        {
          authorName: "Lily Hailey",
          description:
            "What a delightful read! 'Spot On - Canines on a Cruise' left me with a heart full of joy and a smile on my face. The endearing stories of the rescued dogs and the couple's unwavering love for them is simply infectious. Carolynn Tucciarone's writing radiates pure happiness.",
        },
        {
          authorName: "Deborah Daniel",
          description:
            "'Spot On - Canines on a Cruise' brought me to tears with its bittersweet moments. The challenges faced by the couple in rescuing these abandoned fur babies are heartbreaking, yet the book also fills you with hope and the belief in the power of love. A deeply moving experience",
        },
        {
          authorName: "Lauren Ron",
          description:
            "Reading 'Spot On - Canines on a Cruise' was like a breath of fresh air. The dedication of the couple to save as many dogs as possible ignited a newfound passion within me. Carolynn Tucciarone's book is a testament to the transformative power of love and selflessness.",
        },
        {
          authorName: "Alice Ethan",
          description:
            "'Spot On - Canines on a Cruise' opened my eyes to the immense efforts made by rescue organizations. The couple's unwavering commitment to saving abandoned dogs is truly commendable. This book reminded me to be grateful for the kindness and compassion shown by these unsung heroes.",
        },
      ],
    },
    {
      id: 5,
      head: "SPOT- ON: NEW BEGINNINGS",
      desc: "This book is the end of my SPOT ON SERIES.",
      completedDescription: [
        "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs, the couple takes on another challenge of rescuing abandoned fur babies in South Korea. They embark upon their journey and narrate the experience of their lifetime word by word. From China to Mexico and Seoul in South Korea, they then had a successful canines on a cruise!",
        "Step inside their shoes and take part in their adventure-filled journey in “Spot-on: Canines on a Cruise!”",
      ],
      img: "book-card-img-5",
      trailer: "SpotOnCanineBabies-Trailer",
      link: "B09H3N787N/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i5",
      paperback: "11.99",
      hardcover: "",
      ebook: "0.00",
      slug: "spot-on-new-beginnings",
    },
    {
      id: 6,
      head: "MOVING ON: : TO NEW HEIGHTS & NEW ADVENTURES (New beginning.)",
      desc: "Inspired by actual events, a woman and her friends explore new adventures, ups, and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly re...",
      completedDescription: ["This book is the end of my SPOT ON SERIES."],
      img: "book-card-img-7",
      trailer: "SpotOnCanineBabies-Trailer",
      link: "B0B77TFDJV/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0",
      paperback: "9.99",
      hardcover: "",
      ebook: "",
      slug: "moving-on-to-new-heights-and-new-adventures",
      reviews: [
        {
          authorName: "Sarah Thompson",
          description:
            "Throughout her journey, she tackles the highs and lows of new experiences, sharing her vulnerabilities and triumphs. I felt inspired to embrace change and face my own fears after reading this book. Highly recommended for anyone seeking a fresh perspective on life's adventures",
        },
        {
          authorName: "Johnson Robert",
          description:
            "This book is a rollercoaster ride of emotions! From the excitement of embarking on a road trip to the challenges of facing the unknown, the author takes us on a profound journey of growth. While 'Moving On' beautifully captures the essence of friendship and exploration, it also delves into the struggles of living a life of purpose. It's a raw and honest account that reminds us that growth often comes with its share of hardships.",
        },
        {
          authorName: "Emily Ethan",
          description:
            "'Moving On' is a heartfelt reflection of a woman's journey to self-discovery. The author's honest and flawlessly recounted experiences on the road touched my heart. I was moved by her willingness to embrace new adventures and explore the world outside and within. It's a powerful reminder that stepping out of our comfort zones can lead to beautiful transformations.",
        },
        {
          authorName: "David Cooper",
          description:
            "The book explores not just the physical journey but also the emotional one, making it a deeply relatable read. It's a wonderful reminder that life's greatest lessons often lie beyond the familiar.",
        },
        {
          authorName: "Harry Lewis",
          description:
            "The narrative beautifully captures the essence of friendship, making it a touching and relatable read. I felt a strong connection with the protagonist, which made the book all the more impactful.",
        },
        {
          authorName: "Jason Rodriguez",
          description:
            "'Moving On' is not just a road trip tale but also a beautiful ode to friendship. The camaraderie between the protagonist and her friend is heartwarming and adds a special dimension to the story. As they navigate the ups and downs of life, the bond between them grows stronger. This book is a reminder of the importance of cherished friendships and shared experiences.",
        },
        {
          authorName: "Olivia Turner",
          description:
            "This book is a testament to the resilience of the human spirit. The protagonist's journey in 'Moving On' is filled with challenges and setbacks, but she never gives up. Instead, she finds the strength within herself to keep moving forward and embrace new adventures.",
        },
        {
          authorName: "Elizabeth Walker",
          description:
            "'Moving On' takes readers on a profound journey of self-exploration. The author's descriptive writing style brings the landscapes and emotions to life, making it a vivid and immersive experience.",
        },
      ],
    },
    {
      id: 7,
      head: "NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?",
      desc: "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, est...",
      completedDescription: [
        "Inspired by actual events, a woman and her friends explore new adventures, ups , and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly recounted the journey of exploration—of the world outside and the soul within—that takes her to new heights and New adventures.",
        "However, living a life of purpose isn't always as simple as it appears. In truth, it was, at times, tedious, draining, and even desperate. However, she achieved the confidence and experience for which she had yearned. This book explains how she grew stronger on",
        "The road and experienced the highs and lows of new experiences.",
        "On her road journey with her companion, Moving on: To new heights and new adventures is a narrative about a lady learning and unlearning, from backroads to breakdowns and New adventures.",
      ],
      img: "book-card-img-8",
      trailer: "SpotOnCanineBabies-Trailer",
      link: "B0B4BRLLFD/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i1",
      paperback: "7.99",
      hardcover: "",
      ebook: "4.99",
      slug: "new-beginnings-do-you-believe-in-ghosts",
      reviews: [
        {
          authorName: "Amanda Liam",
          description:
            "Carolynn's creativity shines through in this spine-tingling tale, and her portrayal of paranormal encounters is truly captivating. Buckle up for a rollercoaster ride of emotions and prepare to question everything you think you know about the afterlife. Highly recommended!",
        },
        {
          authorName: "Emma John",
          description:
            "A Supernatural Delight! Join hands with Lynn and her friends as they delve into the unknown in 'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' The blend of chilling encounters and unexpected twists kept me hooked until the very last page. If you enjoy supernatural mysteries, this book is a must-read. You won't be disappointed!",
        },
        {
          authorName: "Cynthia George ",
          description:
            "“This book is more than just a ghostly tale. It delves into the complexities of life, friendship, and the afterlife. Lynn's journey to new cities and the reconnection with her childhood friend is beautifully portrayed. Carolynn's narrative weaves together the thrill of ghostly encounters with profound insights, leaving us pondering the mysteries of existence. Prepare to be enchanted and enlightened in equal measure!”",
        },
        {
          authorName: "Deborah Wade",
          description:
            "“Dive into the supernatural realm with Lynn and her friends in 'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?'' Carolynn's writing style is immersive, and her vivid descriptions make the paranormal encounters feel real. The plot takes unexpected turns, leaving you eagerly anticipating what comes next. It's a perfect blend of excitement, friendship, and a touch of eerie mystery. I couldn't put it down!” ",
        },
        {
          authorName: "Elberto Roman",
          description:
            "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a hauntingly beautiful story that lingers in your thoughts long after you finish it. Lynn's journey of self-discovery, coupled with her encounters with the supernatural, makes for an unforgettable read. Carolynn's words flow effortlessly, painting a vivid picture of the cities and the fur baby rescue. This book is a testament to the enduring power of friendship and the wonders of the unknown.”",
        },
        {
          authorName: "Frank Harvey",
          description:
            "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a masterpiece of paranormal fiction. Lynn's adventures take us on an exhilarating ride through the afterlife, exploring the unexplained with Lynn's endearing friends. Carolynn's storytelling prowess is evident in the captivating narrative that leaves you questioning the very fabric of reality. Prepare for sleepless nights as you dive into this eerie and thought-provoking world.”",
        },
        {
          authorName: "Grace Mikes",
          description:
            "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a heartwarming tale of friendship, resilience, and the supernatural. Lynn and her friends' commitment to rehabilitating fur babies is both touching and inspiring. Carolynn's writing gracefully balances the spooky elements with the warmth of human connections, making it an enriching experience. An enthralling read that tugs at your heartstrings!”",
        },
        {
          authorName: "Henry Dan",
          description:
            "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' takes us on an extraordinary journey filled with ghostly encounters and emotional depth. Lynn's transformation as she establishes new roots in a different city is beautifully portrayed. Carolynn's storytelling ability makes the hair-raising paranormal incidents feel believable and utterly engrossing. This is a story that stays with you long after the final page.”",
        },
        {
          authorName: "Isabella Antonnio",
          description:
            "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a mesmerizing tale of the supernatural and the power of friendship. Lynn and her friends' bond is heartwarming, and their adventures kept me enthralled throughout. Carolynn's narrative skillfully blends mystery and emotion, making it a perfect read for anyone who enjoys a blend of thrill and heart. You won't be able to put it down!”",
        },
        {
          authorName: "James Connor",
          description:
            "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a captivating exploration of the unexplained and the resilience of the human spirit. Lynn's journey, along with her friends, is a testament to the power of belief and friendship. Carolynn's writing is evocative, transporting readers to a world where ghosts and mystery await at every turn. Prepare to be spellbound by this delightful and intriguing tale!”",
        },
      ],
    },
    {
      id: 8,
      head: "Christmas On Holiday Island",
      desc: "Are you yearning for a holiday story that transcends time and blends the enchantment of the season with tales of enduring family bonds?",
      completedDescription: [
        "Follow reporter Ava on a festive journey to Holiday Island, a historic Rocky Mountain town. Tasked with writing about Mrs. Creek's great grandparents, Ava discovers a magical Christmas Globe rumored to grant wishes. Amidst 200-year-old buildings adorned with lights, she uncovers an old family book revealing the Creek family's resilience in the early 1900s.",
        "As the town gears up for the Festival of Christmas, Ava's discoveries become a heartwarming exploration of Holiday Island's past. Will the Miracle Christmas Wish bring solace to Mrs. Creek, and can Ava bridge the gap between past and present?",
        "Join Ava in this enchanting tale, where the magic of the season intertwines with enduring family bonds, revealing the miracles of Holiday Island.",
      ],
      img: "book-card-img-9",
      trailer: "ChristmasOnHolidayIsland",
      link: "dp/B0CTL1Y4C9",
      paperback: "10.99",
      hardcover: "",
      ebook: "3.99",
      slug: "christmas-on-holiday-island",
      // reviews: [
      //     {
      //         authorName: "Amanda Liam",
      //         description: "Carolynn's creativity shines through in this spine-tingling tale, and her portrayal of paranormal encounters is truly captivating. Buckle up for a rollercoaster ride of emotions and prepare to question everything you think you know about the afterlife. Highly recommended!",
      //     },
      //     {
      //         authorName: "Emma John",
      //         description: "A Supernatural Delight! Join hands with Lynn and her friends as they delve into the unknown in 'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' The blend of chilling encounters and unexpected twists kept me hooked until the very last page. If you enjoy supernatural mysteries, this book is a must-read. You won't be disappointed!",
      //     },
      //     {
      //         authorName: "Cynthia George ",
      //         description: "“This book is more than just a ghostly tale. It delves into the complexities of life, friendship, and the afterlife. Lynn's journey to new cities and the reconnection with her childhood friend is beautifully portrayed. Carolynn's narrative weaves together the thrill of ghostly encounters with profound insights, leaving us pondering the mysteries of existence. Prepare to be enchanted and enlightened in equal measure!”",
      //     },
      //     {
      //         authorName: "Deborah Wade",
      //         description: "“Dive into the supernatural realm with Lynn and her friends in 'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?'' Carolynn's writing style is immersive, and her vivid descriptions make the paranormal encounters feel real. The plot takes unexpected turns, leaving you eagerly anticipating what comes next. It's a perfect blend of excitement, friendship, and a touch of eerie mystery. I couldn't put it down!” ",
      //     },
      //     {
      //         authorName: "Elberto Roman",
      //         description: "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a hauntingly beautiful story that lingers in your thoughts long after you finish it. Lynn's journey of self-discovery, coupled with her encounters with the supernatural, makes for an unforgettable read. Carolynn's words flow effortlessly, painting a vivid picture of the cities and the fur baby rescue. This book is a testament to the enduring power of friendship and the wonders of the unknown.”",
      //     },
      //     {
      //         authorName: "Frank Harvey",
      //         description: "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a masterpiece of paranormal fiction. Lynn's adventures take us on an exhilarating ride through the afterlife, exploring the unexplained with Lynn's endearing friends. Carolynn's storytelling prowess is evident in the captivating narrative that leaves you questioning the very fabric of reality. Prepare for sleepless nights as you dive into this eerie and thought-provoking world.”",
      //     },
      //     {
      //         authorName: "Grace Mikes",
      //         description: "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a heartwarming tale of friendship, resilience, and the supernatural. Lynn and her friends' commitment to rehabilitating fur babies is both touching and inspiring. Carolynn's writing gracefully balances the spooky elements with the warmth of human connections, making it an enriching experience. An enthralling read that tugs at your heartstrings!”",
      //     },
      //     {
      //         authorName: "Henry Dan",
      //         description: "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' takes us on an extraordinary journey filled with ghostly encounters and emotional depth. Lynn's transformation as she establishes new roots in a different city is beautifully portrayed. Carolynn's storytelling ability makes the hair-raising paranormal incidents feel believable and utterly engrossing. This is a story that stays with you long after the final page.”",
      //     },
      //     {
      //         authorName: "Isabella Antonnio",
      //         description: "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a mesmerizing tale of the supernatural and the power of friendship. Lynn and her friends' bond is heartwarming, and their adventures kept me enthralled throughout. Carolynn's narrative skillfully blends mystery and emotion, making it a perfect read for anyone who enjoys a blend of thrill and heart. You won't be able to put it down!”",
      //     },
      //     {
      //         authorName: "James Connor",
      //         description: "'NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?' is a captivating exploration of the unexplained and the resilience of the human spirit. Lynn's journey, along with her friends, is a testament to the power of belief and friendship. Carolynn's writing is evocative, transporting readers to a world where ghosts and mystery await at every turn. Prepare to be spellbound by this delightful and intriguing tale!”",
      //     }
      // ]
    },
    {
      id: 11,
      head: "Moving On: Stepping Out Of The Box",
      completedDescription: [
        "After a surprising crime occurs at INN, Sage and April get caught up in a mysterious and perilous situation. As a police look into the incident, the intricate details of the case emerge, exposing a sinister plot.",
        "Can they navigate through the complexities and reveal the truth before its too late?",
        "The story takes unexpected twists, involving the intriguing Mr. Robinson and the mysterious Mrs. Small. In the midst of the chaos, a chilling revelation makes everyone question the true nature of event.",
      ],
      img: "book-card-img-10",
      // trailer: "ChristmasOnHolidayIsland",
      link: "dp/B0CTW8YQ5X",
      paperback: "11.99",
      hardcover: "30.69",
      ebook: "3.99",
      categoryLink: "book-detail",
    },
  ];
  // useEffect(() => {
  //   bookDataArray.map((item) => {
  //     if (item.slug == slug) {
  //       bookDetailData(item);
  //     }
  //   });
  // }, []);
  return (
    <section className="moving_sec">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div
              className="moving_sec_img"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <img src={movingStepbox} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="moving_sec_content">
              <div className="sec_title">
                <h3
                  className="sec_title_h3 pink-color"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  Our Book
                </h3>
                <h2
                  className="sec_title_h2 black-color"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  Moving On Stepping Out of The box
                </h2>
              </div>
              <div
                className="sec_p black-color"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <p className="black-color">
                  After a surprising crime occurs at INN, Sage and April get
                  caught up in a mysterious and perilous situation. As a police
                  look into the incident, the intricate details of the case
                  emerge, exposing a sinister plot.
                </p>
              </div>
              {/* <div
                className="body_btns"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <a href="javascript:;" className="btn_with_icon">
                  <span>EBOOK</span>
                  <span className="body_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
                <a href="javascript:;" className="btn_with_icon">
                  <span>PAPERBACK</span>
                  <span className="body_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
                <a href="javascript:;" className="btn_with_icon">
                  <span>VIEW ALL</span>
                  <span className="body_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
              </div> */}
              <div className="body_btns">
                {bookDetail.paperback === "" ? (
                  <></>
                ) : (
                  <>
                    <a
                      class="btn_with_icon"
                      href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                    >
                      <span>
                        Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)
                      </span>
                      <span className="body_icon">
                        <img src={cartIcon} alt="" />
                      </span>
                    </a>
                  </>
                )}
                {/* <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)</span></a> */}
                {bookDetail.ebook === "" ? (
                  <></>
                ) : (
                  <>
                    <a
                      class="btn_with_icon"
                      href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                    >
                      <span>
                        E-Book - ${bookDetail.ebook} (BUY FROM AMAZON)
                      </span>
                      <span className="body_icon">
                        <img src={cartIcon} alt="" />
                      </span>
                    </a>
                  </>
                )}
                {bookDetail.hardcover === "" ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <a
                      class="btn_with_icon"
                      href={`https://www.amazon.com/gp/product/${bookDetail.link}`}
                    >
                      <span>Hardcover - ${bookDetail.hardcover}</span>
                      <span className="body_icon">
                        <img src={cartIcon} alt="" />
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingSection;
