const pubConferencesCoauthor = [
   {
    "authors": ["I. Ballester", "A. Fontan", "J. Civera", "KH. Strobl", "R. Triebel"],
    "title": "DOT: Dynamic Object Tracking for Visual SLAM",
    "venue": conferenceVenues["ICRA"],
    "thumbimage": "Khronos.jpg",
    "thumblink": "https://www.youtube.com/watch?v=9hWChyQGKJk&pp=ygUsRE9UOiBkeW5hbWljIG9iamVjdCB0cmFja2luZyBmb3IgdmlzdWFsIFNMQU0%3D",
    "year": "2021",
    "pages": "Xi'an, China, Jun",
    "links": [{"name": "Paper", "link": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9561452"}, {"name": "Youtube", "link": "https://www.youtube.com/watch?v=9hWChyQGKJk&pp=ygUsRE9UOiBkeW5hbWljIG9iamVjdCB0cmFja2luZyBmb3IgdmlzdWFsIFNMQU0%3D"}, { "name": "ICRA21", "link": "https://ewh.ieee.org/soc/ras/conf/fullysponsored/icra/icra2021/icra2021/web.archive.org/web/20210531183741/https_/www.ieee-icra.org/index.html" }],
    // "awards": ["Outstanding Systems Paper Award"]
  },
  {
    "authors": ["A. Fontan", "J. Civera", "M. Milford"],
    "title": "AnyFeature-VSLAM: Automating the Usage of Any Chosen Feature into Visual SLAM",
    "venue": conferenceVenues["RSS"],
    "thumbimage": "Khronos.jpg",
    "thumblink": "https://github.com/alejandrofontan/AnyFeature-VSLAM",
    "year": "2024",
    "pages": "Delft, The Netherlands, July",
    "links": [{"name": "Paper", "link": "https://www.roboticsproceedings.org/rss20/p084.html"}, { "name": "Code", "link": "https://github.com/alejandrofontan/AnyFeature-VSLAM" }, {"name": "RSS24", "link": "https://roboticsconference.org/2024/"}],
    // "awards": ["Outstanding Systems Paper Award"]
  },
  {
    "authors": ["A. Fontan", "J. Civera", "R. Triebel"],
    "title": "ID-RGBDO: Information-Driven Direct RGB-D Odometry",
    "venue": conferenceVenues["CVPR"],
    "thumbimage": "Khronos.jpg",
    "thumblink": "https://www.youtube.com/watch?v=Ja6QwYiKlu8&pp=ygUoSW5mb3JtYXRpb24tRHJpdmVuIERpcmVjdCBSR0ItRCBPZG9tZXRyeQ%3D%3D",
    "year": "2020",
    "pages": "Virtual, June",
    "links": [{"name": "Paper", "link": "https://openaccess.thecvf.com/content_CVPR_2020/papers/Fontan_Information-Driven_Direct_RGB-D_Odometry_CVPR_2020_paper.pdf"}, { "name": "Youtube", "link": "https://www.youtube.com/watch?v=Ja6QwYiKlu8&pp=ygUoSW5mb3JtYXRpb24tRHJpdmVuIERpcmVjdCBSR0ItRCBPZG9tZXRyeQ%3D%3D" }, {"name": "CVPR20", "link": "https://cvpr2020.thecvf.com/"}],
    "awards": ["Oral Presentation"]
  },
  // {
  //   "authors": ["S. Looper", "J. Rodriguez-Puigvert", "R. Siegwart", "C. Cadena", "L. Schmid"],
  //   "title": "3D VSG: Long-term Semantic Scene Change Prediction through 3D Variable Scene Graphs",
  //   "venue": conferenceVenues["ICRA"],
  //   "thumbimage": "3DVSG.jpg",
  //   "thumblink": "https://github.com/ethz-asl/3d_vsg",
  //   "year": "2023",
  //   "pages": "London, UK, May",
  //   "links": [{ "name": "IEEE", "link": "https://ieeexplore.ieee.org/document/10161212" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2209.07896" }, { "name": "Code", "link": "https://github.com/ethz-asl/3d_vsg" }]
  // },
  // {
  //   "authors": ["L. Schmid", "J. Delmerico", "J. Schonberger", "J. Nieto", "M. Pollefeys", "R. Siegwart", "C. Cadena"],
  //   "title": "Panoptic Multi-TSDFs: a Flexible Representation for Online Multi-resolution Volumetric Mapping and Long-term Dynamic Scene Consistency",
  //   "venue": conferenceVenues["ICRA"],
  //   "thumbimage": "PM.jpg",
  //   "thumblink": "https://github.com/ethz-asl/3d_vsg",
  //   "year": "2022",
  //   "pages": "Philadelphia (PA), USA, May",
  //   "links": [{ "name": "IEEE", "link": "https://ieeexplore.ieee.org/document/9811877" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2109.10165" }, { "name": "Code", "link": "https://github.com/ethz-asl/panoptic_mapping" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=A7o2Vy7_TV4" }]
  // },
  // {
  //   "authors": ["S. Lionar", "L. Schmid", "C. Cadena", "R. Siegwart", "A. Cramariuc"],
  //   "title": "NeuralBlox: Real-Time Neural Representation Fusion for Robust Volumetric Mapping",
  //   "venue": conferenceVenues["3DV"],
  //   "thumbimage": "Neuralblox.jpg",
  //   "thumblink": "https://github.com/ethz-asl/3d_vsg",
  //   "year": "2021",
  //   "pages": "London, United Kingdom, December",
  //   "links": [{ "name": "IEEE", "link": "https://ieeexplore.ieee.org/document/9665902" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2110.09415" }, { "name": "Code", "link": "https://github.com/ethz-asl/neuralblox" }],
  //   "sharedfirst": true
  // },
  // {
  //   "authors": ["T. Digumarti", "L. Schmid", "G. Rizzi", "J. Nieto", "R. Siegwart", "P. Beardsley", "C. Cadena"],
  //   "title": "An Approach for Semantic Segmentation of Tree-like Vegetation",
  //   "venue": conferenceVenues["ICRA"],
  //   "thumbimage": "TreeSeg.jpg",
  //   "thumblink": "https://ieeexplore.ieee.org/document/8793576",
  //   "year": "2019",
  //   "pages": "Montreal, Canada, May",
  //   "links": [{ "name": "IEEE", "link": "https://ieeexplore.ieee.org/document/8793576" }],
  //   "sharedfirst": true
  // }
]