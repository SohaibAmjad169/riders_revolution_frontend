import { BsFillFuelPumpFill } from 'react-icons/bs'
import { ImPowerCord } from 'react-icons/im'
import { IoSpeedometerSharp } from 'react-icons/io5'
import { PiEngineFill } from 'react-icons/pi'

export const bikes = [
  {
    id: 1,
    name: 'Honda CD 70',
    price: 'PKR150,000/-',
    imageUrl: '/CD70Red.png',
    rating: 4.5,
    specifications: {
      general: [
        {
          label: 'Engine',
          value: '4-Stroke OHC Air Cooled',
          icon: PiEngineFill,
        },
        {
          label: 'Petrol Capacity',
          value: '8.5 Liters',
          icon: BsFillFuelPumpFill,
        },
        { label: 'Starting', value: 'Kick Start', icon: ImPowerCord },
        { label: 'Transmission', value: '4-Speed', icon: IoSpeedometerSharp },
      ],
      performance: [
        { label: 'Transmission', value: '4-Speed' },
        { label: 'Ground Clearance', value: '136 mm' },
        { label: 'Starting', value: 'Kick Start' },
        { label: 'Displacement', value: '72 cc' },
        { label: 'Petrol Capacity', value: '8.5 Liters' },
      ],
      assembly: [
        { label: 'Compression Ratio', value: '8.8:1' },
        { label: 'Bore and Stroke', value: '47.0 x 41.4 mm' },
        { label: 'Tyre (Front)', value: '2.25 – 17 (4PR)' },
        { label: 'Tyre (Rear)', value: '2.50 – 17 (4PR)' },
        { label: 'Seat Height', value: '762 mm' },
      ],
    },
    questions: [
      {
        question: 'What is the fuel efficiency?',
        answer: 'Around 60-70 km/l.',
      },
      {
        question: 'Is it suitable for long rides?',
        answer: "It's ideal for short distances and city rides.",
      },
    ],
    dimensions: {
      items: [
        { label: 'Length', value: '1897 mm' },
        { label: 'Width', value: '751 mm' },
        { label: 'Height', value: '1051 mm' },
        { label: 'Weight', value: '82 kg' },
      ],
    },
  },
  {
    id: 2,
    name: 'Honda CG 125',
    price: 'PKR200,000/-',
    imageUrl: '/0004_CG125-Red.png',
    rating: 4.5,
    specifications: {
      general: [
        {
          label: 'Engine',
          value: '4-Stroke OHV Air Cooled',
          icon: PiEngineFill,
        },
        {
          label: 'Petrol Capacity',
          value: '9.2 Liters',
          icon: BsFillFuelPumpFill,
        },
        { label: 'Starting', value: 'Kick Start', icon: ImPowerCord },
        { label: 'Transmission', value: '5-Speed', icon: IoSpeedometerSharp },
      ],
      performance: [
        { label: 'Transmission', value: '5-Speed' },
        { label: 'Ground Clearance', value: '140 mm' },
        { label: 'Starting', value: 'Kick Start' },
        { label: 'Displacement', value: '125 cc' },
        { label: 'Petrol Capacity', value: '9.2 Liters' },
      ],
      assembly: [
        { label: 'Compression Ratio', value: '9.0:1' },
        { label: 'Bore and Stroke', value: '56.5 x 49.5 mm' },
        { label: 'Tyre (Front)', value: '2.50 – 18' },
        { label: 'Tyre (Rear)', value: '3.00 – 17' },
        { label: 'Seat Height', value: '765 mm' },
      ],
    },
    questions: [
      {
        question: 'What is the top speed?',
        answer: 'The top speed is approximately 100-110 km/h.',
      },
      {
        question: 'What is the warranty period?',
        answer: 'Honda offers a 6-month warranty.',
      },
    ],
    dimensions: {
      items: [
        { label: 'Length', value: '2020 mm' },
        { label: 'Width', value: '730 mm' },
        { label: 'Height', value: '1065 mm' },
        { label: 'Weight', value: '110 kg' },
      ],
    },
  },
  {
    id: 3,
    name: 'Yamaha YBR 125',
    price: 'PKR225,000/-',
    imageUrl: '/Yamaha-YBR-125-G-1-Black.jpg',
    rating: 4.5,
    specifications: {
      general: [
        {
          label: 'Engine',
          value: '4-Stroke SOHC Air Cooled',
          icon: PiEngineFill,
        },
        {
          label: 'Petrol Capacity',
          value: '13 Liters',
          icon: BsFillFuelPumpFill,
        },
        { label: 'Starting', value: 'Electric/Kick Start', icon: ImPowerCord },
        { label: 'Transmission', value: '5-Speed', icon: IoSpeedometerSharp },
      ],
      performance: [
        { label: 'Transmission', value: '5-Speed' },
        { label: 'Ground Clearance', value: '160 mm' },
        { label: 'Starting', value: 'Electric/Kick Start' },
        { label: 'Displacement', value: '125 cc' },
        { label: 'Petrol Capacity', value: '13 Liters' },
      ],
      assembly: [
        { label: 'Compression Ratio', value: '10.0:1' },
        { label: 'Bore and Stroke', value: '54.0 x 54.0 mm' },
        { label: 'Tyre (Front)', value: '2.75 – 18' },
        { label: 'Tyre (Rear)', value: '90/90 – 18' },
        { label: 'Seat Height', value: '775 mm' },
      ],
    },
    questions: [
      {
        question: 'Does it support pillion riders?',
        answer: 'Yes, it is comfortable for pillion riders.',
      },
      {
        question: 'What is the mileage?',
        answer: 'The bike provides a mileage of 40-45 km/l.',
      },
    ],
    dimensions: {
      items: [
        { label: 'Length', value: '2005 mm' },
        { label: 'Width', value: '760 mm' },
        { label: 'Height', value: '1110 mm' },
        { label: 'Weight', value: '130 kg' },
      ],
    },
  },
  {
    id: 4,
    name: 'Vlektra Electric Bike',
    price: 'PKR300,000/-',
    imageUrl: '/119371f558be51fe0236a499e0f0dedd.jpg_720x720q80.jpg_.webp',
    rating: 4.5,
    specifications: {
      general: [
        { label: 'Motor', value: 'Electric Motor', icon: PiEngineFill },
        {
          label: 'Battery Capacity',
          value: '2.5 kWh',
          icon: BsFillFuelPumpFill,
        },
        { label: 'Range', value: '80-100 km', icon: ImPowerCord },
        {
          label: 'Charging Time',
          value: '4-6 Hours',
          icon: IoSpeedometerSharp,
        },
      ],
      performance: [
        { label: 'Top Speed', value: '80 km/h' },
        { label: 'Battery Type', value: 'Lithium-Ion' },
        { label: 'Motor Power', value: '1500W' },
        { label: 'Warranty', value: '2 Years' },
      ],
      assembly: [
        { label: 'Tires', value: 'Tubeless' },
        { label: 'Frame', value: 'Alloy Frame' },
        { label: 'Brakes', value: 'Disc Brakes' },
      ],
    },
    questions: [
      {
        question: 'What is the warranty?',
        answer: '2 years on battery and motor.',
      },
      {
        question: 'Is it water-resistant?',
        answer: 'Yes, it is water-resistant.',
      },
    ],
    dimensions: {
      items: [
        { label: 'Length', value: '1800 mm' },
        { label: 'Width', value: '680 mm' },
        { label: 'Height', value: '1100 mm' },
        { label: 'Weight', value: '95 kg' },
      ],
    },
  },
  {
    id: 5,
    name: 'YBR 125G',
    price: 'PKR275,000/-',
    imageUrl: '/ybr-black-2022-model.png',
    rating: 4.5,
    specifications: {
      general: [
        {
          label: 'Engine',
          value: '4-Stroke SOHC Air Cooled',
          icon: PiEngineFill,
        },
        {
          label: 'Petrol Capacity',
          value: '12.5 Liters',
          icon: BsFillFuelPumpFill,
        },
        { label: 'Starting', value: 'Electric/Kick Start', icon: ImPowerCord },
        { label: 'Transmission', value: '5-Speed', icon: IoSpeedometerSharp },
      ],
      performance: [
        { label: 'Transmission', value: '5-Speed' },
        { label: 'Ground Clearance', value: '160 mm' },
        { label: 'Starting', value: 'Electric/Kick Start' },
        { label: 'Displacement', value: '125 cc' },
        { label: 'Petrol Capacity', value: '12.5 Liters' },
      ],
      assembly: [
        { label: 'Compression Ratio', value: '10.0:1' },
        { label: 'Bore and Stroke', value: '54.0 x 54.0 mm' },
        { label: 'Tyre (Front)', value: '2.75 – 18' },
        { label: 'Tyre (Rear)', value: '90/90 – 18' },
        { label: 'Seat Height', value: '775 mm' },
      ],
    },
    questions: [
      {
        question: 'Does it support pillion riders?',
        answer: 'Yes, it is comfortable for pillion riders.',
      },
      {
        question: 'What is the mileage?',
        answer: 'The bike provides a mileage of 40-45 km/l.',
      },
    ],
    dimensions: {
      items: [
        { label: 'Length', value: '2005 mm' },
        { label: 'Width', value: '760 mm' },
        { label: 'Height', value: '1110 mm' },
        { label: 'Weight', value: '130 kg' },
      ],
    },
  },
  {
    id: 6,
    name: 'Suzuki GSX-R125',
    price: 'PKR320,000/-',
    imageUrl: '/suzuki-gsxr125.png',
    rating: 4.7,
    specifications: {
      general: [
        {
          label: 'Engine',
          value: '4-Stroke DOHC Liquid Cooled',
          icon: PiEngineFill,
        },
        {
          label: 'Petrol Capacity',
          value: '11 Liters',
          icon: BsFillFuelPumpFill,
        },
        { label: 'Starting', value: 'Electric Start', icon: ImPowerCord },
        { label: 'Transmission', value: '6-Speed', icon: IoSpeedometerSharp },
      ],
      performance: [
        { label: 'Transmission', value: '6-Speed' },
        { label: 'Ground Clearance', value: '160 mm' },
        { label: 'Starting', value: 'Electric Start' },
        { label: 'Displacement', value: '125 cc' },
        { label: 'Petrol Capacity', value: '11 Liters' },
      ],
      assembly: [
        { label: 'Compression Ratio', value: '11.5:1' },
        { label: 'Bore and Stroke', value: '54.0 x 54.0 mm' },
        { label: 'Tyre (Front)', value: '90/80 – 17' },
        { label: 'Tyre (Rear)', value: '130/70 – 17' },
        { label: 'Seat Height', value: '785 mm' },
      ],
    },
    questions: [
      {
        question: 'What is the top speed?',
        answer: 'It can reach a top speed of around 140 km/h.',
      },
      {
        question: 'Is it suitable for beginners?',
        answer: 'Yes, it is suitable for beginner riders.',
      },
    ],
    dimensions: {
      items: [
        { label: 'Length', value: '1990 mm' },
        { label: 'Width', value: '670 mm' },
        { label: 'Height', value: '1085 mm' },
        { label: 'Weight', value: '135 kg' },
      ],
    },
  },
]
