import { Brush, CircleCheckBig, CircleDollarSign, Cpu, Filter, Frame, GalleryHorizontal, Gauge, Handshake, IndianRupee, LayoutDashboard, Mail, Send, Video, Workflow } from "lucide-react"
import { Domain } from "./api-endpoint"

export const siteConfig = {
    siteName:"HStock Albums",
    siteLogo:"/images/logo.webp",
    siteDiscription:"hstock Team is an online platform I developed to host BATTLEGROUNDS MOBILE INDIA (BGMI) tournaments, offering both free and paid rooms for players to compete and connect. This side project allowed me to combine my passion for gaming with my front-end and back-end development skills while learning new technologies in the process.",
    email:"support@hstockalbums.com",
    footerText:"© 2025 HStock Albums All Rights Reserved",
    TopBadge:"Introducing our 7 days trail at 199", 
    phoneNumber:(<><span>+91 </span>{", "}<span>+91 8929006611</span></>),
    address:"Hari Still Video Collection, Lodhi Market, Siyana Road, Bulandshahr (203001) Uttar Pradesh, India",
    howCanhelp:"Tell us about your project — we offer a powerful album designing software that makes creating albums and managing your photos faster and easier than ever before.",
    ourLocation:(<>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1754.568811821721!2d77.8789196!3d28.4151039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca107bf4c4f95%3A0xc063ed22e53dfd0f!2sHari%20Still%20Video%20Collection!5e0!3m2!1sen!2sin!4v1757071416583!5m2!1sen!2sin" 
      width="600" height="450"
      style={{border:0}}
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
    ),
    NavigationItem:[
      {
        label:'Hero Section',
        icon: GalleryHorizontal,
        path:'/control-panel/hero-section'
      },
      {
        label:'User Info',
        icon:LayoutDashboard,
        path:'/control-panel'
      },
      {
        label:'Payment',
        icon: CircleDollarSign,
        path:'/control-panel/payment-info'
      },
      {
        label:'Referral',
        icon: Send,
        path:'/control-panel/referral'
      },
      {
        label:'Plan',
        icon: IndianRupee,
        path:'/control-panel/plan'
      },
      {
        label:'Youtube Video',
        icon: Video,
        path:'/control-panel/video'
      },
      {
        label:'Email Content',
        icon: Mail,
        path:'/control-panel/email-section'
      }
    ],
    ServicesWeProvide :[
      {
        title: "High-Quality Designs",
        description: "Attractive, unique, and high-resolution designs.",
        icon: Cpu,
      },
      {
        title: "Seamless Workflow",
        description: "Automate your workflow smoothly without any interruptions.",
        icon: Workflow,
      },
      {
        title: "Superior Speed",
        description: "Fastest performance compared to other software solutions.",
        icon: Gauge,
      },
      {
        title: "User-Friendly Interface",
        description: "Easy-to-understand user interface. And Easy-to-use",
        icon: Handshake,
      }
    ],
    highlight : [
      {
        title: "Complete Solution",
        description: "Retouch photos to final designs all in one software.",
      },
      {
        title: "Make Your Own Designs",
        description: "Create your own designs manually or automatically.",
      },
      {
        title: "Extractor",
        description: "Extract clips, frames, or backgrounds from any template with one click.",
      },
      {
        title: "Effects & Filters",
        description: "Unique filters and effects like cinematic effects, dark spot healing, smoothness filter, etc.",
      },
    ],
    features: [
      {
      title: "High-Quality Designs",
      description: "Attractive, unique, and high-resolution designs.",
      icon: <Cpu/>,
      },
      {
        title: "Seamless Workflow",
        description: "Automate your workflow smoothly without any interruptions.",
        icon: <Workflow/>,
      },
      {
        title: "Superior Speed",
        description: "Fastest performance compared to other software solutions.",
        icon: <Gauge/>,
      },
      {
        title: "User-Friendly Interface",
        description: "Easy-to-understand user interface. And Easy-to-use",
        icon: <Handshake />,
      },
      {
        title: "Complete Solution",
        description: "Retouch photos to final designs all in one software.",
        icon: <CircleCheckBig />,
      },
      {
        title: "Make Your Own Designs",
        description: "Create your own designs manually or automatically.",
        icon: <Brush />,
      },
      {
        title: "Extractor",
        description: "Extract clips, frames, or backgrounds from any template with one click.",
        icon: <Frame />,
      },
      {
        title: "Effects & Filters",
        description: "Unique filters and effects like cinematic effects, dark spot healing, smoothness filter, etc.",
        icon: <Filter />,
      }
    ],
    featureSections:[
      {
        title: "Photoshop Versions",
        description: "Supports all Photoshop versions from CS3 to CC 2023"
      },
      {
        title: "Settings",
        description: "Select preferred data in one go, easy access to photos, cutout portraits, and template packs"
      },
      {
        title: "Collection",
        description: "Store custom collections for future use"
      },
      {
        title: "Auto Features",
        features: [
          {
            name: "Auto Page",
            description: "Create a complete sheet with one click in seconds"
          },
          {
            name: "Auto Fill",
            description: "Manually open template and insert photo into frame layer"
          },
          {
            name: "Automate",
            description: "Design entire album at once with a single click"
          }
        ]
      },
      {
        title: "Image Manipulation",
        features: [
          {
            name: "Image Change",
            description: "Replace sample images with your own photos"
          },
          {
            name: "Image Import",
            description: "Place your own images anywhere on the template"
          },
          {
            name: "Swap",
            description: "Interchange images used in template"
          },
          {
            name: "Background Change",
            description: "Modify template background"
          }
        ]
      },
      {
        title: "Advanced Editing",
        features: [
          {
            name: "M.1",
            description: "Multiple image enhancement options including levels, sharpening, hotspot fill, healing filters, color tones, cinematic effects, beauty retouch, and more"
          },
          {
            name: "M.2",
            description: "Batch processing capabilities like clearing layers, resetting, splitting, inverting images, and template creation"
          }
        ]
      },
      {
        title: "Output & Export",
        features: [
          {
            name: "PSD to JPG",
            description: "Convert finished templates from PSD to JPG format"
          },
          {
            name: "Save & Save As",
            description: "Save or save as any image or template"
          },
          {
            name: "Watermark",
            description: "Add custom watermarks to documents"
          }
        ]
      }
    ],
    ciberPolicyData : {
      english: [
        {
          id: 1,
          title: "Copyright Protection",
          content: "Our UI and designs are copyrighted specifically for HStock; no one else holds rights to them."
        },
        {
          id: 2,
          title: "OTP Collection",
          content: "We do not request any OTP from our customers for confirmation purposes."
        },
        {
          id: 3,
          title: "Cyber Crime Awareness",
          content: "Data leaks, personal information collection, OTP fraud, and payment fraud are all considered cyber crimes. Please do not engage in such activities."
        },
        {
          id: 4,
          title: "Penalties",
          content: "The Indian Copyright Act of 1957 covers software piracy and provides for penalties of up to three years in prison and a fine of up to 200,000 rupees. However, if the software was not used for gain or in the course of business, the court may not impose a prison sentence."
        },
        {
          id: 5,
          title: "Legal Action Against Privacy",
          content: "Companies have the right to track down and take legal action against organizations that use pirated software. They can file civil suits seeking damages."
        },
        {
          id: 6,
          title: "Risks of Using Pirated Software",
          content: "Using pirated software can lead to security vulnerabilities, bugs, and glitches, resulting in lost work and time. Cybercriminals can embed malware into pirated software, compromising personal computers and stealing sensitive information."
        },
        {
          id: 7,
          title: "Reporting Misconduct",
          content: "If you observe any kind of wrongful activity on your computer or our website, please inform us."
        },
        {
          id: 8,
          title: "Cyber Crime Jurisdiction and Complaint Filing",
          content: "Cyber crime complaints will be addressed within the jurisdiction of Bulandshahr, Uttar Pradesh. Victims are encouraged to file complaints directly with the Cyber Crime Cell in Bulandshahr for prompt action."
        }
      ],
      hindi: [
        {
          id: 1,
          title: "कुप्रबंधन सुरक्षा",
          content: "हमारा UI और डिज़ाइन HStock के लिए विशेष रूप से कुप्रबंधन सुरक्षा है; किसी और के पास इनके अधिकार नहीं हैं।"
        },
        {
          id: 2,
          title: "OTP संग्रहन",
          content: "हम किसी भी पुष्टि के लिए अपने ग्राहकों से कोई OTP नहीं मांगते हैं।"
        },
        {
          id: 3,
          title: "साइबर क्राइम जागरूकता",
          content: "डेटा लीक, व्यक्तिगणित जानकारी का संग्रहण, OTP धोखाधड़ी और भूगतान धोखाधड़ी सभी साइबर अपराध मानने जाते हैं। कृपया ऐसी गतिविधियों में शामिल न हों।"
        },
        {
          id: 4,
          title: "दंड",
          content: "भारतीय कुप्रबंधन अधिनियम, 1957 अनुसार कुप्रबंधन पैरेसी को कवर करता है और तीन साल तक की जेल और 200,000 रुपए तक की जुर्माना की सजा का प्रावधान करता है। हालाँकि, यदि कुप्रबंधन का उपयोग लाभ के लिए या व्यवसाय के दौरान नहीं किया गया था, तो अदालत जमानती की सजा नहीं दे सकती है।"
        },
        {
          id: 5,
          title: "पायरेटेड सॉफ्टवेयर के खिलाफ कानून का कार्यवाही",
          content: "कंपनियों को पायरेटेड सॉफ्टवेयर का उपयोग करने वाले संधनों के खिलाफ कार्यवाही करने का अधिकार है। वे हराने की मांग करने के लिए नागरिक मामलों के दायर कर सकते हैं।"
        },
        {
          id: 6,
          title: "पायरेटेड सॉफ्टवेयर के उपयोग के जोख़िम",
          content: "पायरेटेड सॉफ्टवेयर का उपयोग सुरक्षा छिद्रों, बग, और गंभीरताओं का कारण बन सकता है, जो काम और समय के नुकसानों का कारण बन सकता है। साइबर अपराधी पायरेटेड सॉफ्टवेयर में मेलवेयर डाल सकते हैं, जिससे व्यक्तिगणित कंप्यूटरों से संवेदनशील जानकारी चोरी हो सकती है।"
        },
        {
          id: 7,
          title: "गलत हरकत की सूचना",
          content: "अगर आप अपने कंप्यूटर या हमारी वेबसाइट पर किसी भी प्रकार की गलत गतिविधि देख रहे हैं, तो कृपया हमें सूचित करें।"
        },
        {
          id: 8,
          title: "साइबर अपराध का न्याय क्षेत्र और शिकायत दर्ज करना",
          content: "साइबर अपराध के लिए न्याय क्षेत्र बुलंदशहर ही परिबद्ध है।"
        }
      ]
    },
    termsData:{
      english: [
        {
          id: 1,
          text: "We believe in transparency with our customers. We do not demand any extra charges beyond the information and fees stated in our software."
        },
        {
          id: 2,
          text: "When you purchase the software from our website, after payment, you will automatically receive the download link for the software and data, along with the activation keys and all details sent to your registered email. You will install all the data according to our instructions, which will include everything. (For offline customers, the keys can also be provided via a call after delivering the software, and they will be printed on the software. You can activate it by watching the demo video on YouTube or from the software data. The installation procedure for offline customers will be the same as that for online customers.)"
        },
        {
          id: 3,
          text: "Our software is licensed for one PC for one user only (which means once you register it with a specific computer, it will work on that computer for a lifetime)."
        },
        {
          id: 4,
          text: "No dongle will be provided with our software (for offline users, a pendrive will be delivered via courier containing all the data, but after copying and cutting it to your computer, the customer can use it for their purposes pendrive charges extra)."
        },
        {
          id: 5,
          text: "If for any reason your computer encounters any issues, and if the data provided by us is lost (such as in the case of motherboard or processor failure, etc.), the customer will need to repurchase the software."
        },
        {
          id: 6,
          text: "If you change your Windows, reset, or format your computer without changing any hardware parts like the motherboard or processor, the customer can reactivate our software using the same keys that were provided to them."
        },
        {
          id: 7,
          text: "The updated version of the software or updated data will be free or paid provided for free (however, the charges will be very reasonable)."
        },
        {
          id: 8,
          text: "HStock Albums supports all versions of Photoshop from CS3 to CC without any version-related issues."
        },
        {
          id: 9,
          text: "If you face any issues related to HStock, you can feel free to call us at +91 8929003311, +91 8929006611"
        }
      ],
      hindi: [
        {
          id: 1,
          text: "हम ग्राहकों के साथ पारदर्शिता में विश्वास करते हैं। हम अपने सॉफ़्टवेयर में बताये गए जानकारियों और चार्जेस के अलावा कोई भी अतिरिक्त चार्ज नहीं मांगते।"
        },
        {
          id: 2,
          text: "हमारी वेबसाइट से सॉफ़्टवेयर को खरीदने पर, भुगतान के बाद आपके पास खुद ही सॉफ़्टवेयर और डेटा की डाउनलोड लिंक आएगी, और आपकी रजिस्टर्ड मेल पर उसकी एक्टिवेशन की और सारी डिटेल्स भी आएंगी। आप हमारे बताए अनुसार सभी डेटा को इंस्टॉल करेंगे, जिसमें कि सारा डेटा शामिल होगा। (ऑफ़लाइन वाले ग्राहकों को कीज़ सॉफ़्टवेयर डिलीवर करने के बाद कॉल के माध्यम से भी दी जा सकती हैं, और सॉफ़्टवेयर पर भी प्रिंट मिलेंगी, जिसमें कि आप डेमो वीडियो यूट्यूब या सॉफ़्टवेयर के डेटा में से देखकर उसे एक्टिवेट कर सकते हैं। बाकी सब कुछ ऑनलाइन वाले की तरह ही इंस्टॉलेशन का प्रक्रिया होगी।)"
        },
        {
          id: 3,
          text: "हमारा सॉफ़्टवेयर केवल एक पीसी के लिए एक उपयोगकर्ता के लिए लाइसेंस प्राप्त है (मतलब, एक बार जिस कंप्यूटर के साथ आपने इसे रजिस्टर कर लिया, वह उस कंप्यूटर पर लाइफटाइम के लिए काम करेगा)।"
        },
        {
          id: 4,
          text: "हमारे सॉफ़्टवेयर के साथ कोई भी डोंगल नहीं दिया जाएगा (ऑफलाइन उपयोगकर्ताओं के लिए, एक पेनड्राइव कूरियर के माध्यम से भेजी जाएगी, जिसमें सारा डेटा होगा, लेकिन आपके कंप्यूटर पर कॉपी और कट करने के बाद ग्राहक उसे अपने उपयोग में ले सकता है)।"
        },
        {
          id: 5,
          text: "अगर किसी भी कारण से आपके कंप्यूटर में कोई ख़राबी आ जाती है, और अगर हमारा दिया गया डेटा ख़त्म हो जाता है (जैसे कि, मदरबोर्ड, प्रोसेसर ख़राब होने पर आदि), तो ग्राहक को फिर से सॉफ़्टवेयर खरीदना होगा।"
        },
        {
          id: 6,
          text: "अगर आप अपने कंप्यूटर में विंडोज़ बदलते हैं, रीसेट करते हैं या फॉर्मेट करते हैं बिना किसी हार्डवेयर पार्ट जैसे कि मदरबोर्ड या प्रोसेसर आदि को बदले, तो ग्राहक उन्हीं कीज का उपयोग करके हमारे सॉफ़्टवेयर को फिर से सक्रिय कर सकता है जो उसे प्रदान की गई थीं।"
        },
        {
          id: 7,
          text: "सॉफ़्टवेयर का अपडेटेड संस्करण या अपडेटेड डेटा पेड़ होगा, इसे मुफ्त में नहीं दिया जाएगा (लेकिन चार्ज बहुत सामान्‍य होंगे)।"
        },
        {
          id: 8,
          text: "HStock Albums फ़ोटोषॉप के सभी संस्करण CS3 से CC तक सभी को समर्थन करता है, कोई भी संस्करण का इश्यू नहीं है।"
        },
        {
          id: 9,
          text: "अगर आपकों HStock से संबंधित कोई भी परेशानी का सामना करना पड़ें, तो आप हमें बेफिक्र कॉल कर सकते हैं - +91 8929003311, +91 8929006611"
        }
      ]
    },
    privacyPolicyData: [
      {
        id: 1,
        title: "Information Collection",
        content: "We collect the following information from our customers: Full name, Email address, Phone number, Permanent or residence address, City, State, Pin code"
      },
      {
        id: 2,
        title: "Use of Information",
        content: "User account creation, Providing software updates and support, Marketing purposes"
      },
      {
        id: 3,
        title: "Cookies",
        content: "Description of cookie policy would be added here."
      },
      {
        id: 4,
        title: "Data Security",
        content: "We value your trust in providing us your personal information; thus, we strive to use commercially acceptable means of protecting it."
      },
      {
        id: 5,
        title: "Information Sharing",
        content: "We share our customers' data with some third parties when necessary for validation purposes."
      },
      {
        id: 6,
        title: "User Rights",
        content: "Users can update their registered information, but it is not guaranteed that the software they purchased will be registered with that information. However, your updated information will be used for your next purchase."
      },
      {
        id: 7,
        title: "Third-party Services",
        content: "We use third-party services for payments and related processes."
      },
      {
        id: 8,
        title: "Children's Privacy",
        content: "Although our software encourages customers to learn new things, there is no specific age criterion for using it. However, we recommend that this software be used primarily by individuals aged 17 and above."
      },
      {
        id: 9,
        title: "Changes to the Privacy Policy",
        content: "If we make any changes to our privacy policy, updates will be communicated to customers through our official website, YouTube channel, Instagram page, Facebook page, WhatsApp channel, email, and customer personal numbers, etc."
      },
      {
        id: 10,
        title: "Contact Information",
        content: "If you have any questions about this Privacy Policy, please contact us: Email: support@hstockalbums.com Phone: +91XXXXXXXXXX, +91XXXXXXXXXX"
      },
      {
        id: 11,
        title: "Website Link",
        content: `For more information, please visit our website: ${Domain}`
      }
    ],
    editingOptions :[
      { 
        id: "auto-retouch", 
        name: "Auto Retouch",
        beforeImg: "/Before-Aftre-Section/10 Auto Retouch/Before.jpg",
        afterImg: "/Before-Aftre-Section/10 Auto Retouch/After.jpg"
      },
      { 
        id: "portrait-filter", 
        name: "Portrait Filter",
        beforeImg: "/Before-Aftre-Section/11 Portrait Filter/Before.jpg",
        afterImg: "/Before-Aftre-Section/11 Portrait Filter/After.jpg"
      },
      { 
        id: "group-filter", 
        name: "Group Filter",
        beforeImg: "/Before-Aftre-Section/12 Group Filter/Before.jpg",
        afterImg: "/Before-Aftre-Section/12 Group Filter/After.jpg"
      },
      { 
        id: "patch-fill", 
        name: "Patch Fill",
        beforeImg: "/Before-Aftre-Section/05 Patch/Before.jpg",
        afterImg: "/Before-Aftre-Section/05 Patch/After.jpg"
      },
      { 
        id: "red-cast-balance", 
        name: "Red Cast Correction",
        beforeImg: "/Before-Aftre-Section/04 Red Cast/Before.jpg",
        afterImg: "/Before-Aftre-Section/04 Red Cast/After.jpg"
      },
      { 
        id: "auto-cut", 
        name: "Auto Cutting",
        beforeImg: "/Before-Aftre-Section/16 Aut Cut/Before.jpg",
        afterImg: "/Before-Aftre-Section/16 Aut Cut/After.jpg"
      },
      { 
        id: "creative", 
        name: "Creative Effect",
        beforeImg: "/Before-Aftre-Section/07 Creative/Before.jpg",
        afterImg: "/Before-Aftre-Section/07 Creative/After.jpg"
      },
      { 
        id: "jwellery", 
        name: "Jwellery Effect",
        beforeImg: "/Before-Aftre-Section/08 Jwellery/Before.jpg",
        afterImg: "/Before-Aftre-Section/08 Jwellery/After.jpg"
      },
      { 
        id: "dress", 
        name: "Dress Color",
        beforeImg: "/Before-Aftre-Section/09 Dress/Before.jpg",
        afterImg: "/Before-Aftre-Section/09 Dress/After.jpg"
      },
      { 
        id: "gradient", 
        name: "Gradient Effect",
        beforeImg: "/Before-Aftre-Section/13 Gradient/Before.jpg",
        afterImg: "/Before-Aftre-Section/13 Gradient/After.jpg"
      },
      { 
        id: "bokeh", 
        name: "Bokeh Effect",
        beforeImg: "/Before-Aftre-Section/14 Bokeh/Before.jpg",
        afterImg: "/Before-Aftre-Section/14 Bokeh/After.jpg"
      },
      { 
        id: "cinematic-effects", 
        name: "Cinematic Effect",
        beforeImg: "/Before-Aftre-Section/01 Cinematic/Before.jpg",
        afterImg: "/Before-Aftre-Section/01 Cinematic/After.jpg"
      },
      { 
        id: "tint-ffects", 
        name: "Tint Effect",
        beforeImg: "/Before-Aftre-Section/06 Tint/Before.jpg",
        afterImg: "/Before-Aftre-Section/06 Tint/After.jpg"
      },
      { 
        id: "clear-reset", 
        name: "Clear Reset Template",
        beforeImg: "/Before-Aftre-Section/02 Clear Reset/Before.jpg",
        afterImg: "/Before-Aftre-Section/02 Clear Reset/After.jpg"
      },
      { 
        id: "frame-extract", 
        name: "Extract Template Elements",
        beforeImg: "/Before-Aftre-Section/03 Frame Extract/Before.jpg",
        afterImg: "/Before-Aftre-Section/03 Frame Extract/After.jpg"
      },
      { 
        id: "temp-create", 
        name: "Create PSD Template",
        beforeImg: "/Before-Aftre-Section/15 Temp Create/Before.jpg",
        afterImg: "/Before-Aftre-Section/15 Temp Create/After.jpg"
      },
      { 
        id: "watermark", 
        name: "Watermark",
        beforeImg: "/Before-Aftre-Section/17 Watermark/Before.jpg",
        afterImg: "/Before-Aftre-Section/17 Watermark/After.jpg"
      },
    ],    
    footerLink:[
      {
        name:"About",
        link:"/about"
      },
      {
        name: "Contact",
        link:"/contact"
      },
      // {
      //   name:"FAQ",
      //   link:"/faq"
      // },
      {
        name:"Privacy Policy",
        link:"/policy"
      },
      {
        name:"Terms and Conditions",
        link:"/terms"
      },
      {
        name:"Return / Refund Policy",
        link:"/return-refund"
      },
      {
        name:"Cyber Crime Policy",
        link:"/cyber-crime-policy"
      }
    ],
    socialLink:{
      facebook:"https://www.facebook.com/hstockalbums/",
      twitter:"#",
      instagram:'https://www.instagram.com/hstockalbums/',
      youtube:'https://www.youtube.com/@HStockAlbums',
      whatsapp:"https://whatsapp.com/channel/0029Vb6XIeUGehEKfBmEPx0n"
    },
    welcomeTitle:(<>
      <h2 className="text-2xl font-bold text-start">
        🎉 Welcome to <span className="text-indigo-600">HStock Album</span>!
      </h2>
    </>),
    welcomeMessage : (
      <div className="space-y-3 text-start">
        <p className="text-base text-gray-700">
          🚀 Your all-in-one solution for stunning{" "}
          <span className="font-semibold text-indigo-600">images & albums</span>
        </p>
        <p className="text-lg font-bold text-red-600">
          🔥 Launch Offer: <span className="text-yellow-500">UP TO 50% OFF</span>{" "}
          <span className="text-gray-800">– Limited Time Only!</span>
        </p>
      </div>
    )

}

export type SiteConfig = typeof siteConfig