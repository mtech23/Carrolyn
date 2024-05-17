import React, { useState } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { ReviewsBox } from "../../components/Reviews";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";

export const ReviewPage = () => {
  // Sample data array containing review data
  const feebackdata = [
    {
      description:
        "As a lifelong dog lover and avid reader, I can confidently say that the books on this website have captured my heart. The author's deep understanding of the canine world is evident in every page, and their storytelling skills are exceptional. These books have taken me on incredible journeys filled with adventure, laughter, and tears. I highly recommend them to all fellow dog enthusiasts!",
      authorName: "Sarah Peterson",
    },
    {
      description:
        "I stumbled upon this author's dog books while searching for a gift for my daughter, who adores dogs. Little did I know that I would become just as engrossed in the stories as she is! The author's ability to portray the unique personalities of different dog breeds is truly remarkable. The books are not only entertaining but also educational, teaching valuable life lessons through the eyes of our furry friends. We can't wait for the next installment!",
      authorName: "Michael Johnson",
    },
    {
      description:
        "Being a dog trainer, I've read my fair share of books on dogs, but none have left such a lasting impression as the ones on this website. The author's authentic portrayal of the bond between humans and dogs resonated deeply with me. Their books are a delightful blend of heartwarming moments and thought-provoking insights into the canine psyche. I've recommended these books to my clients, and they've all come back thanking me for the recommendation!",
      authorName: "Emily Collins",
    },
    {
      description:
        "As a parent, I'm always on the lookout for books that my kids will enjoy and learn from. These dog books have become a staple in our household. The author's captivating storytelling has kept my children hooked from start to finish. Not only have these books sparked their imagination, but they've also taught them valuable lessons about responsibility, empathy, and the importance of treating animals with love and kindness. We can't get enough of these wonderful stories!",
      authorName: "Harry Styles",
    },
    {
      authorName: "Amelia Clarke",
      description:
        "Who Believes In Ghosts?' took me on an exhilarating journey through the realms of the supernatural. Lynn and her friends' adventures were nothing short of captivating, and I found myself unable to put the book down. The seamless blend of friendship, mystery, and ghostly encounters kept me on the edge of my seat. Carolynn's storytelling is top-notch, making the paranormal experiences feel incredibly real. Bravo!",
    },
    {
      authorName: "Ethan Parker",
      description:
        "This book is a rollercoaster ride of emotions! 'Who Believes In Ghosts?' had me feeling excited, scared, and even moved to tears at times. Lynn's bond with her childhood friend and their quest to help the furry companions left a lasting impression on me. Carolynn's imagination is boundless, and she skillfully weaves a tapestry of supernatural phenomena that left me pondering the unknown. A delightful read!",
    },
    {
      authorName: "Olivia Dani",
      description:
        "Carolynn's writing style is really beautiful. 'Who Believes In Ghosts?' not only offers spine-tingling encounters but also delves into deeper themes of friendship, compassion, and the mysteries of life after death. I was truly moved by the heartfelt connections Lynn and her friends formed while rehabilitating the fur babies. This book will make you believe in the power of love, both in life and beyond.",
    },
    {
      authorName: "Benjamin Pecktis",
      description:
        "Lynn's journey through different cities and her encounters with the supernatural had me hooked from the beginning. 'Who Believes In Ghosts?' is an adventure beyond the grave, and I found myself contemplating the existence of ghosts long after I finished the book. Carolynn's storytelling is spellbinding, and her attention to detail brings every scene to life. A must-read for anyone seeking a thrilling and thought-provoking tale!",
    },
    {
      authorName: "Sophia Smith",
      description:
        "Who Believes In Ghosts?'is a page-turner filled with intrigue and captivating characters. Lynn's friendship with her childhood companion adds a touch of nostalgia and warmth to the eerie storyline. The paranormal encounters are chillingly realistic, and Carolynn's skillful prose kept me engaged throughout. I couldn't resist being drawn into this otherworldly journey!",
    },
    {
      authorName: "Samuel James",
      description:
        "What a wonderful mix of friendship and supernatural wonders! 'Who Believes In Ghosts?' is an engaging and heartwarming story that explores the power of human connections, even in the face of paranormal events. Lynn and her friends embark on a thrilling adventure that will leave you spellbound. Carolynn's ability to create an atmosphere of mystery and curiosity is commendable. Thumbs up!",
    },
    {
      authorName: "Isabella Rose",
      description:
        "This book had me under its spell from start to finish. 'Who Believes In Ghosts?' is both eerie and mesmerizing, with its spine-chilling encounters and heart-touching moments. Lynn's journey from city to city, accompanied by her friends, is filled with unexpected twists that kept me guessing. Carolynn's imagination knows no bounds, and her portrayal of the supernatural is exceptionally vivid. An enthralling read!",
    },
    {
      authorName: "Lucas Tom",
      description:
        "'Who Believes In Ghosts?' is a delightful exploration of the supernatural realm. Lynn and her friends take us on a thrilling adventure that's both exciting and haunting. Carolynn's storytelling skills shine brightly as she creates a world where paranormal encounters are as natural as breathing. I thoroughly enjoyed every moment of this captivating book! ",
    },
    {
      authorName: "Sarah Jenkins",
      description:
        "'Moving On: To New Heights & New Adventures' is a captivating account of a woman's transformative journey. Through her eloquent storytelling, she shared the highs and lows of her road trip with her close friend. The book radiates positivity and serves as a powerful reminder that stepping out of one's comfort zone can lead to remarkable personal growth.",
    },
    {
      authorName: "David Thompson",
      description:
        "Reading 'Moving On: To New Heights & New Adventures' was an emotional rollercoaster. The author's honesty in recounting the challenges she faced on her solo road trip was commendable.",
    },
    {
      authorName: "Emily Parker",
      description:
        "This book is a beautiful tale of self-discovery and resilience.",
    },
    {
      authorName: "James Anderson",
      description:
        "The book sheds light on the ups and downs of life's journey, making it a relatable and worthwhile read",
    },
    {
      authorName: "Sophia Mitchell",
      description:
        "This book is a beautiful amalgamation of profound insights and heart-touching moments. The author's ability to reflect on her experiences and draw meaningful life lessons is truly commendable. 'Moving On' leaves readers pondering their own paths and inspires them to embrace new adventures.",
    },
    {
      authorName: "Benjamin Turner",
      description:
        "From the first page, 'Moving On: To New Heights & New Adventures' grabbed my attention and never let go. The author's engaging writing style made me feel like I was part of her journey, experiencing each moment alongside her. I thoroughly enjoyed this adventure-packed narrative.",
    },
    {
      authorName: "Emma Brooks",
      description:
        "The way the author and her friend supported each other through thick and thin was heartwarming.'Moving On' beautifully captures the essence of companionship and shared experiences.",
    },
    {
      authorName: "Michael Roberts",
      description:
        "She bared her soul, allowing readers to witness her growth and evolution. This book is a compelling testament to the power of vulnerability.",
    },
    {
      authorName: "Sarah Thompson",
      description:
        "'SPOT ON - Mystery At The Dog Rescue' is an exhilarating adventure that had me on the edge of my seat from start to finish. The author skillfully weaves together a tale of suspense, courage, and the power of friendship. I couldn't put it down!",
    },
    {
      authorName: "James Anderson",
      description:
        "What a gripping conclusion to an incredible series! 'SPOT ON - Mystery At The Dog Rescue' had me hooked from the first page. The author's ability to create tension and keep readers guessing is truly remarkable. This book is a must-read for any mystery lover.",
    },
    {
      authorName: "Emily Johnson",
      description:
        "'SPOT ON - Mystery At The Dog Rescue' is a heart-wrenching tale of resilience and determination. The characters face unimaginable challenges and their unwavering loyalty to each other is truly inspiring. The author's vivid descriptions transported me into their world, making this a truly unforgettable read.",
    },
    {
      authorName: "Daniel Roberts",
      description:
        "This book is a rollercoaster ride of emotions! 'SPOT ON - Mystery At The Dog Rescue' had me laughing, crying, and cheering for the characters throughout their journey. The author's ability to evoke such strong emotions is a testament to their storytelling prowess. I highly recommend this book to anyone who enjoys a good adventure.",
    },
    {
      authorName: "Olivia Davis",
      description:
        "The author's deep understanding of the human-canine relationship shines through, making this book a beautiful tribute to our loyal companions. I was truly touched by this heartfelt tale.",
    },
    {
      authorName: "Benjamin Taylor",
      description:
        "This book is a true page-turner that will keep readers hooked from beginning to end.",
    },
    {
      authorName: "Sophia Ramirez",
      description:
        "'SPOT ON - Mystery At The Dog Rescue' is a thrilling and suspenseful read. The author skillfully builds up the tension, keeping readers on their toes throughout the entire book. This is an absolute must-read for fans of mystery and adventure.",
    },
    {
      authorName: "Michael Thompson",
      description:
        "'SPOT ON - Mystery At The Dog Rescue' is an action-packed novel that will leave readers breathless. The author's attention to detail and knack for creating vivid imagery made me feel like I was right there alongside the characters, experiencing their triumphs and tribulations. I was captivated from the very first page and couldn't wait to see how it all unfolded.",
    },
    {
      authorName: "Emily Wills",
      description:
        "'Moving On: Welcome to a New Year of Mystery And Chaos! has captured my heart with its fascinating blend of mystery and chaos. As I delved into the story, I couldn't help but be swept away by the author's incredible storytelling.",
    },
    {
      authorName: "John Tye",
      description:
        "'This book, Moving On, beautifully portrays the complexities of human relationships and the challenges that come with them. It touched my heart as I witnessed April and her husband's journey, struggling to find common ground amidst chaos.",
    },
    {
      authorName: "Sarah Michael",
      description:
        "'Moving On: Welcome to a New Year of Mystery And Chaos! presents a thought-provoking narrative that delves into the intricacies of marriage and the importance of compromise. April's character arc serves as a poignant reflection of the challenges individuals face when seeking resolution in relationships.",
    },
    {
      authorName: "Michael Henry",
      description:
        "'Whoa! Brace yourselves for a rollercoaster ride of emotions in Moving On! This book takes you on an exhilarating journey filled with love, heartbreak, and suspense. April and her husband's passionate yet tumultuous relationship kept me hooked from start to finish. The cruise mystery brought an element of surprise that I totally didn't see coming. An electrifying read!",
    },
    {
      authorName: "Grace Larry",
      description:
        "'Moving On: Welcome to a New Year of Mystery And Chaos! is a heartwarming tale of love and redemption. The author's tender portrayal of April and her husband's struggles struck a chord with me, reminding us all that life is a journey of learning and growth. The mystery on the cruise was a delightful twist that added excitement to the narrative. A truly uplifting story!",
    },
    {
      authorName: "Jake Patterson",
      description:
        "'Hey there, readers! You're in for a wild ride with Moving On! This book offers a perfect blend of chaos and mystery, making it an entertaining page-turner. April and her husband's escapades had me laughing out loud at times, and their misadventures on the cruise had me at the edge of my seat. A rollicking good time!",
    },
    {
      authorName: "Emma Wilson",
      description:
        "'Moving On weaves a nostalgic tale of reminiscence and growth. April and her husband's struggle to find middle ground is portrayed with genuine emotion that resonates deeply. The mystery surrounding the cruise stirred up memories of classic whodunits, and I couldn't help but feel a sense of nostalgia. A beautifully evocative read!",
    },
    {
      authorName: "Alex Rose",
      description:
        "'Moving On is an empowering story of strength and resilience. April's journey reflects the indomitable human spirit, and her refusal to be confined by circumstances is truly inspiring. The cruise mystery introduced a new layer of intrigue that held my attention throughout. An empowering read that reminds us to face life's chaos head-on",
    },
    {
      authorName: "Henry Parker",
      description:
        "'Petty The Bull Terrier took me on an enchanting journey with Petey and his adorable pals. The book beautifully captures the essence of friendship and loyalty among dogs. I found myself engrossed in their adventurous tale, from the grooming place to the thrilling dog show. The suspenseful plot with the dogs being kidnapped had me on the edge of my seat, rooting for their safe return.",
    },
    {
      authorName: "David Peterson",
      description:
        "'The characters are wonderfully portrayed, and their bond of friendship is truly heartwarming. The unexpected twist of them being kidnapped kept me hooked until the very end. I couldn't help but feel invested in their fate. A beautifully written tale that resonates with the soul",
    },
    {
      authorName: "Jessica Hailey",
      description:
        "'Wow! Petty The Bull Terrier surpassed my expectations. This book was quite different from the author's previous series, and I loved every bit of it. Petey and his friends embark on an exhilarating dventure that kept me guessing at every turn. The author's creativity in portraying their escapades in Canada and Mexico was commendable. The suspense and uncertainty surrounding their return added an exciting layer to the story. A must-read for all dog lovers!",
    },
    {
      authorName: "Michael Eric",
      description:
        "'Petty The Bull Terrier is a captivating story that beautifully captures the resilience and courage of our four-legged companions. Petey's adventures were both heartwarming and gripping. The way the author portrays the deep bond between the dogs and their determination to come home was truly touching. This book left me with a sense of warmth and admiration for our loyal canine friends. A compelling and emotional journey!",
    },
    {
      authorName: "Angela Spenser",
      description:
        "'A gem of a book that can be enjoyed by readers of all ages. The delightful tale of Petey and his pals is both entertaining and heartwarming. I found myself smiling, laughing, and even shedding a tear during their adventurous journey. The author's writing style is engaging and keeps you invested in the characters throughout. A perfect book to share with friends and family.",
    },
    {
      authorName: "Jason Scott",
      description:
        "'I couldn't help but feel emotionally attached to Petey and his furry gang. The kidnappings in Canada and Mexico had me at the edge of my seat, wondering how they would find their way back home. An exciting and memorable read!",
    },
    {
      authorName: "Laura Steve",
      description:
        "'Petty The Bull Terrier is a book that tugs at your heartstrings and stays with you long after you've turned the last page. Petey's adventure with his pals is both captivating and emotionally resonant. The author skillfully portrays the complexities of friendship and the unwavering loyalty of dogs. I found myself emotionally invested in their journey, hoping for a happy reunion. An excellent addition to the author's collection.",
    },
    {
      authorName: "Mark Denny",
      description:
        "The ending left me with a mix of emotions, making this a truly memorable read",
    },
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
    {
      authorName: "Carlos Wayne.",
      description:
        "'SPOT ON - New Beginnings' took me on a gripping journey from start to finish. The way the author intricately weaves the threads of adventure, love, and suspense is truly commendable. I found myself deeply invested in the characters, rooting for them throughout their ordeal. The heart-wrenching moments of being kidnapped and sold left me on the edge of my seat. And that ending! Oh, it left me both satisfied and yearning for more. Kudos to the author for crafting such an engaging tale.",
    },
    {
      authorName: "Ricardo Paul",
      description:
        "As a fan of the Spot On series, 'New Beginnings' did not disappoint! The thrilling adventure in Canada and Mexico had me hooked from page one. I connected with the dogs on a personal level, and their journey was both heartwarming and heart-wrenching. I admire how the author delicately handled the emotions throughout the story. Although it marks the end of the series, it does so on a high note, leaving me with bittersweet feelings. Thank you for this emotional rollercoaster.",
    },
    {
      authorName: "Gerald Joey",
      description:
        "“This book showcases the author's incredible storytelling prowess. The way the narrative unfolds, with its twists and turns, kept me intrigued until the final page. I appreciated the attention to detail and the well-developed characters. However, the ambiguous ending left me pondering the fate of the dogs. While I prefer conclusive endings, I acknowledge the author's intent to spark reflection and discussion. An impressive conclusion to the Spot-On series.",
    },
    {
      authorName: "Martin Scott",
      description:
        "This book touched my heart deeply. 'New Beginnings' takes readers on an emotional rollercoaster, celebrating the bond between humans and dogs. The kidnapping plotline was unsettling, but it beautifully highlighted the resilience of these brave dogs. The author's prose painted vivid pictures, making me feel like I was right there with the characters. And the ending! The uncertainty surrounding the dogs' return left me hopeful yet anxious. An emotional and powerful read.",
    },
    {
      authorName: "Jessica T",
      description:
        "'SPOT ON - New Beginnings' stands out as an engrossing conclusion to the series. The adventure-packed journey across Canada and Mexico kept me engrossed, eager to uncover the dogs' fate. The author masterfully incorporated surprising twists that kept me guessing at every turn. The characters' growth and development were a joy to witness. I'll miss this series, but I'll cherish the memories it left behind.",
    },
    {
      authorName: "Rick Victor",
      description:
        "This book left me with mixed emotions, but in a good way. The heart-pounding adventure the dogs embarked on was captivating, and the portrayal of their resilience was heartwarming. The book's exploration of love and hope, even in the face of adversity, resonated deeply with me. The open-ended conclusion allowed me to imagine the future of the dogs, making the story linger in my mind long after I finished reading.",
    },
    {
      authorName: "Liam Nick",
      description:
        "As a devoted fan of the Spot On series, 'New Beginnings' felt like saying goodbye to old friends. The author's talent for crafting complex characters and immersive settings shone through once again. The dogs' experiences were both heartrending and inspiring, making the story hard to put down. The ending, though uncertain, left me with a sense of hope and nostalgia. Thank you for giving us this remarkable journey.",
    },
    {
      authorName: "Ava Sandy",
      description:
        "'The kidnapping plotline had me gripping the book tightly, desperate to know the dogs' fate. The story's emotional depth and the dogs' unwavering determination kept me engaged throughout. While the ending was open-ended, it allowed me to ponder the possibilities, and that glimmer of hope made all the difference.",
    },
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
    {
      authorName: "Della Henry",
      description:
        "'Moving On' is an enchanting tale that takes readers on an emotional journey. Lynn and April's bond is truly heartwarming as they venture into the world of innkeeping. The Texas sage backdrop adds a unique charm to the story, while the unexpected mysteries keep you hooked till the last page. I couldn't help but feel invested in each character's growth and development. Kudos to the author for crafting such a delightful narrative!",
    },
    {
      authorName: "Guzman Andrew",
      description:
        "From the very first chapter, 'Moving On' captivated my attention with its engaging plot and well-rounded characters. The seamless blend of adventure and romance kept me turning the pages eagerly. Lynn and April's determination to turn their dreams into reality is both inspiring and relatable. The Texas setting provides a picturesque backdrop, adding an extra layer of beauty to the story. A must-read for anyone seeking a heartfelt and thrilling novel.",
    },
    {
      authorName: "Olivia Greene",
      description:
        "Moving On' is a unique blend of whimsy and mystery, transporting readers to a world filled with eccentric characters and unexpected twists. Lynn and April's journey is both humorous and poignant, and the Texas sage landscape adds a touch of magic to the narrative. The inn's mysteries had me guessing until the end, and I enjoyed every moment of this delightful adventure. A truly delightful read!",
    },
    {
      authorName: "Ethan Roberts",
      description:
        "'Moving On' is a touching portrayal of the strength of human spirit and the power of friendship. Lynn and April's determination to follow their dreams despite the challenges is truly inspiring. The Texas sage setting is vividly described, immersing readers in its beauty. The mysteries woven throughout the plot add an exciting element, keeping readers on their toes. A beautifully written novel that will stay with me for a long time.",
    },
    {
      authorName: "Emily Lewis",
      description:
        "'A heartwarming story that left me with a smile on my face. Lynn and April's friendship is the true highlight of the book, and their journey to open an inn in Texas sage is filled with touching moments. The mysteries at the inn add a thrilling twist, making it a perfect balance of warmth and suspense. An utterly delightful read that left me feeling uplifted.",
    },
    {
      authorName: "Peter Carter",
      description:
        "'This book is a testament to the author's exceptional storytelling skills. Lynn and April's characters are so well-crafted that they almost feel like old friends. The vivid descriptions of Texas sage paint a picturesque backdrop for the intriguing mysteries that unfold at the inn. The novel's themes of courage, love, and second chances resonate deeply with the reader. A masterful work of fiction that I wholeheartedly recommend.",
    },
    {
      authorName: "Isabella Foster",
      description:
        "'Moving On' takes readers on a journey of self-discovery and personal growth. Lynn and April's determination to pursue their dreams despite the obstacles is truly empowering. The Texas sage setting is brought to life through evocative descriptions, immersing readers in its beauty. The mysteries that befall the inn add an element of suspense that keeps you hooked till the end. An engaging and thought-provoking read.",
    },
    {
      authorName: "Potter Francis",
      description:
        "An emotionally charged rollercoaster ride that left me feeling both elated and contemplative. Lynn and April's friendship is beautifully portrayed, and their adventures in Texas sage are filled with excitement and heartache. The mysteries at the inn add a layer of intrigue that keeps you guessing. The author's writing style is both captivating and eloquent. A powerful and moving novel that resonates with the human spirit.",
    },
    {
      authorName: "Ava Thompson",
      description:
        "It is a delightful escapade into the lives of Lynn and April as they embark on a new chapter in Texas sage. The bond between these two characters is enchanting, and their determination to open an inn despite the challenges is inspiring. The mysteries that arise at the inn add a dash of excitement to the narrative. This heartwarming tale is a perfect blend of adventure, romance, and friendship.",
    },
    {
      authorName: "James Harrison",
      description:
        "Lynn and April's journey to open an inn in Texas sage is filled with ups and downs, making it a relatable and engaging read. The mysteries that unfold at the inn add an element of suspense that keeps you invested in the story. The author's vivid storytelling paints a beautiful picture of the characters' experiences. An immersive and touching novel that leaves a lasting impression.",
    },
    {
      authorName: "Brown Jones",
      description:
        "'SPOT ON - Chaos At The Dog Rescue' is a heartwarming tale that left me in awe of Lynn's dedication to saving these precious dogs. The author beautifully captures the bond between humans and animals, reminding us of the power of compassion.",
    },
    {
      authorName: "Young Hall",
      description:
        "From the moment I started reading 'SPOT ON - Chaos At The Dog Rescue,' I was hooked by the thrilling mystery and unexpected twists. Lynn's determination to uncover the truth kept me on the edge of my seat throughout the book.",
    },
    {
      authorName: "Adams Bakers",
      description:
        "The raw emotions evoked by 'SPOT ON - Chaos At The Dog Rescue' made me shed tears for the hardships these innocent dogs endure. Lynn's unwavering empathy and relentless efforts to provide them a better life left a profound impact on me.",
    },
    {
      authorName: "Warren Long",
      description:
        "'SPOT ON - Chaos At The Dog Rescue' had me laughing out loud with its witty dialogue and charming characters. Lynn's adventurous journey is filled with humorous moments that brought a smile to my face.",
    },
    {
      authorName: "Jordon Hamilton",
      description:
        "Through the pages of 'SPOT ON - Chaos At The Dog Rescue,' I was transported to a world where kindness and love conquer all obstacles. Lynn's magical connection with the rescue dogs touched my heart, reminding me of the extraordinary bonds we can form with animals.",
    },
    {
      authorName: "Russel Foster",
      description:
        "'SPOT ON - Chaos At The Dog Rescue' exposed the dark side of human behavior, leaving me frustrated with the injustices these animals face. This thought-provoking narrative shed light on the importance of animal welfare and the need for change.",
    },
    {
      authorName: "Graham Griffin",
      description:
        "Lynn's unwavering determination in 'SPOT ON - Chaos At The Dog Rescue' filled me with hope for a better world. This uplifting story reminded me that even in the face of chaos, one person's actions can make a significant difference in the lives of others.",
    },
    {
      authorName: "Jacob Campbell",
      description:
        "'SPOT ON - Chaos At The Dog Rescue' beautifully captures the bittersweet reality of rescue work. Lynn's journey is a testament to the immense joy and heartache that comes with saving lives, leaving a lasting impression on my heart.",
    },
    {
      authorName: "Lily Lopez",
      description:
        "I couldn't put down 'SPOT ON - Chaos At The Dog Rescue' as Lynn's adventure unfolded before my eyes. The gripping narrative and vivid descriptions made me feel like I was right beside her, experiencing every moment of the chaotic and unforgettable journey.",
    },
    {
      authorName: "Noah Allen",
      description:
        "'SPOT ON - Chaos At The Dog Rescue' ignited a fire within me to make a difference in the lives of animals. Lynn's dedication and unwavering commitment to her mission inspired me to take action and be a voice for those who cannot speak for themselves.",
    },
    {
      authorName: "Emily Wills",
      description:
        "Moving On: Welcome to a New Year of Mystery And Chaos! has captured my heart with its fascinating blend of mystery and chaos. As I delved into the story, I couldn't help but be swept away by the author's incredible storytelling.",
    },
    {
      authorName: "John Tye",
      description:
        "This book, Moving On, beautifully portrays the complexities of human relationships and the challenges that come with them. It touched my heart as I witnessed April and her husband's journey, struggling to find common ground amidst chaos.",
    },
    {
      authorName: "Sarah Michael",
      description:
        "Moving On: Welcome to a New Year of Mystery And Chaos! presents a thought-provoking narrative that delves into the intricacies of marriage and the importance of compromise. April's character arc serves as a poignant reflection of the challenges individuals face when seeking resolution in relationships.",
    },
    {
      authorName: "Michael Henry",
      description:
        "Whoa! Brace yourselves for a rollercoaster ride of emotions in Moving On! This book takes you on an exhilarating journey filled with love, heartbreak, and suspense. April and her husband's passionate yet tumultuous relationship kept me hooked from start to finish. The cruise mystery brought an element of surprise that I totally didn't see coming. An electrifying read!",
    },
    {
      authorName: "Grace Larry",
      description:
        "Moving On: Welcome to a New Year of Mystery And Chaos! is a heartwarming tale of love and redemption. The author's tender portrayal of April and her husband's struggles struck a chord with me, reminding us all that life is a journey of learning and growth. The mystery on the cruise was a delightful twist that added excitement to the narrative. A truly uplifting story!",
    },
    {
      authorName: "Jake Patterson",
      description:
        "Hey there, readers! You're in for a wild ride with Moving On! This book offers a perfect blend of chaos and mystery, making it an entertaining page-turner. April and her husband's escapades had me laughing out loud at times, and their misadventures on the cruise had me at the edge of my seat. A rollicking good time!",
    },
    {
      authorName: "Emma Wilson",
      description:
        "Moving On weaves a nostalgic tale of reminiscence and growth. April and her husband's struggle to find middle ground is portrayed with genuine emotion that resonates deeply. The mystery surrounding the cruise stirred up memories of classic whodunits, and I couldn't help but feel a sense of nostalgia. A beautifully evocative read!",
    },
    {
      authorName: "Alex Rose",
      description:
        "Moving On is an empowering story of strength and resilience. April's journey reflects the indomitable human spirit, and her refusal to be confined by circumstances is truly inspiring. The cruise mystery introduced a new layer of intrigue that held my attention throughout. An empowering read that reminds us to face life's chaos head-on.",
    },
  ];
  // Number of cards to display per page
  const cardsPerPage = 15;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the cards to display on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Slice the data array to get the cards for the current page
  const currentCards = feebackdata.slice(startIndex, endIndex);

  // Function to handle page change when pagination is clicked
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(feebackdata.length / cardsPerPage);

  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Riveting Rollercoaster: A Thrilling Best Dog Books for Kids Reviews
        </title>
        <meta
          name="description"
          content="Captivating from start to finish! A masterful blend of suspense and emotions that are best dog books for kids. A must-read for all."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SubHeader name="Reviews" img={BannerImage} subHeading="Testimonials" />

      <div className="inner_page_section_head head_modified">
        <h2>Client’s Reviews</h2>
      </div>

      <div className="Feedbacks modified_feedback">
        {currentCards.map((ReviewData, index) => (
          <ReviewsBox
            key={index}
            title={ReviewData.authorName}
            description={ReviewData.description}
          />
        ))}
      </div>

      {/* Render pagination */}
      <div className="pagination modified_pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </LayoutTheme>
  );
};
