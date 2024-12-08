
export const setlocalStorage=()=>{


  const employees = [
    {
      "id": 1,
    "email": "e1@e.com",
    "password": "123",
    "firstName": "Amit",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Prepare the monthly sales report with detailed analysis.",
        "taskDate": "2024-11-28",
        "category": "Sales"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Meet with client to discuss new requirements.",
        "taskDate": "2024-11-25",
        "category": "Meetings"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "System Update",
        "taskDescription": "Update the company’s server software.",
        "taskDate": "2024-11-22",
        "category": "IT"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "email": "e2@e.com",
    "password": "123",
    "firstName": "Priya",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Marketing Materials",
        "taskDescription": "Design flyers, banners, and online ads for the upcoming product launch.",
        "taskDate": "2024-12-05",
        "category": "Marketing"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Website",
        "taskDescription": "Update the homepage with the latest company announcements.",
        "taskDate": "2024-11-24",
        "category": "Web Development"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Create Social Media Ads",
        "taskDescription": "Create new social media ads for the upcoming campaign.",
        "taskDate": "2024-11-20",
        "category": "Advertising"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "email": "e3@e.com",
    "password": "123",
    "firstName": "Ravi",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Write a blog post about the new product launch.",
        "taskDate": "2024-12-01",
        "category": "Content"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Research Competitors",
        "taskDescription": "Conduct research on top competitors in the market.",
        "taskDate": "2024-11-18",
        "category": "Research"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Product Demo Video",
        "taskDescription": "Create a video demonstrating the features of the new product.",
        "taskDate": "2024-11-15",
        "category": "Video Production"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "email": "e4@e.com",
    "password": "123",
    "firstName": "Sneha",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Feedback Survey",
        "taskDescription": "Send out a survey to gather customer feedback on our new product.",
        "taskDate": "2024-11-30",
        "category": "Customer Service"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Weekly team meeting to discuss current projects.",
        "taskDate": "2024-11-27",
        "category": "Meetings"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "e5@e.com",
    "password": "123",
    "firstName": "Aarav",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Budget Forecast",
        "taskDescription": "Prepare the budget forecast for the next quarter.",
        "taskDate": "2024-12-10",
        "category": "Finance"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Analyze Quarterly Performance",
        "taskDescription": "Analyze the performance for the previous quarter and prepare a report.",
        "taskDate": "2024-11-23",
        "category": "Finance"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Invoice Management",
        "taskDescription": "Review and process incoming invoices from vendors.",
        "taskDate": "2024-11-20",
        "category": "Accounting"
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];



const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
    firstName: "Naresh",
    role:"admin"
  },
];

localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalStorage = () => {
const employees = JSON.parse(localStorage.getItem("employees")) || [];
const admin = JSON.parse(localStorage.getItem("admin")) || [];
return { employees, admin };
};