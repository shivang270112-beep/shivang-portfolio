export const projects = [
  {
    id: 'litmath', title: 'LitMath', category: 'Python', status: 'Completed',
    summary: 'A Python-based mathematics learning application designed around Class 10 mathematics.',
    details: 'LitMath was developed as an educational programming project. Its focus is to make mathematics practice more engaging through a structured application. The project is part of my interest in combining problem-solving with technology.',
    tags: ['Python', 'Education', 'Mathematics']
  },
  {
    id: 'pick-place', title: 'Robotics Pick-and-Place Bot', category: 'Robotics', status: 'Completed',
    summary: 'A wired robotics project developed with the Jagran Tech Titans team.',
    details: 'A team robotics build focused on a pick-and-place task. The project involved assembling and controlling a wheeled robot with a gripper as part of a hands-on robotics experience.',
    tags: ['Robotics', 'Teamwork', 'Hardware']
  },
  {
    id: 'delivery-bot', title: 'ESP32 Delivery Robot', category: 'Robotics', status: 'Completed',
    summary: 'A delivery-robot project exploring embedded systems and mobile robotics.',
    details: 'This project explored the use of an ESP32 and motor-control electronics in a small delivery robot. Obstacle detection is a planned extension, not a feature being claimed as complete.',
    tags: ['ESP32', 'Embedded Systems', 'Robotics'], planned: 'Obstacle detection'
  },
  {
    id: 'plant-monitor', title: 'Plant Monitoring System', category: 'Innovation', status: 'Completed',
    summary: 'An Arduino-based project focused on monitoring plant conditions.',
    details: 'A practical electronics project using Arduino to explore plant monitoring. A live dashboard is a planned extension that could make the readings easier to view.',
    tags: ['Arduino', 'Sensors', 'Innovation'], planned: 'Live monitoring dashboard'
  },
  {
    id: 'earthquake-model', title: 'Earthquake-Resistant Building Model', category: 'Innovation', status: 'Completed',
    summary: 'A model exploring structural design ideas for earthquake resistance.',
    details: 'This model explored how structural design choices can help buildings respond to earthquake forces. It provided a practical way to communicate engineering concepts through a physical demonstration.',
    tags: ['Engineering', 'Structural Design', 'Research']
  }
];

export const achievements = [
  { value: '1st', label: 'Rank', detail: '19th National Mathematics Convention, Ahmedabad, Gujarat', icon: 'award' },
  { value: 'Jr.', label: 'Head Boy', detail: 'School Student Council', icon: 'leadership' },
  { value: 'SAA', label: 'Sergeant-at-Arms', detail: 'School Rotary Club', icon: 'service' },
  { value: '2025', label: 'Techfest', detail: 'Participated in the 2025 event in Kanpur', icon: 'robot' }
];

export const timeline = [
  { date: '2025', title: 'Techfest, Kanpur', text: 'Participated in a technology and innovation event in Kanpur.' },
  { date: 'Ongoing', title: 'Student Council', text: 'Serving as Junior Head Boy and contributing to school leadership.' },
  { date: 'Ongoing', title: 'Rotary Club', text: 'A proud member of the school Rotary Club, serving as Sergeant-at-Arms.' },
  { date: 'Ongoing', title: 'Projects & Learning', text: 'Building and exploring projects across Python, robotics, electronics and engineering.' }
];

export const skills = ['Python programming', 'Robotics', 'Public speaking', 'Innovation and problem-solving', 'Leadership and teamwork', 'Creative problem-solving'];
export const interests = ['Artificial Intelligence', 'Technology and programming', 'Entrepreneurship', 'Robotics', 'Social innovation', 'Public speaking and communication'];
