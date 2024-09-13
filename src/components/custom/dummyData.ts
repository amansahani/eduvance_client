import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    name: "Engineering",
    wipLimits: [
      {
        id: uuidv4(),
        name: "Backlog",
        tasks: [
          {
            id: uuidv4(),
            title: "Finish design mockups",
            description: "Create high-fidelity designs for the new homepage",
            dueDate: "2023-06-15",
            status: "backlog",
            assignee: "Rahul@eduvance.com",
            labels: ["design", "high-priority"],
            priority: "high",
          },
          {
            id: uuidv4(),
            title: "Implement login functionality",
            description:
              "Integrate the authentication system with the backend API",
            dueDate: "2023-06-20",
            status: "backlog",
            assignee: "om@eduvance.com",
            labels: ["engineering", "medium-priority"],
            priority: "low",
          },
        ],
        wip: 2,
      },
      {
        id: uuidv4(),
        name: "Done",
        tasks: [
          {
            id: uuidv4(),
            title: "Finish design mockups",
            description: "Create high-fidelity designs for the new homepage",
            dueDate: "2023-06-15",
            status: "backlog",
            assignee: "ganesh@eduvance.com",
            labels: ["design", "high-priority"],
            priority: "high",
          },
        ],
        wip: 2,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Database",
    wipLimits: [
      {
        id: uuidv4(),
        name: "Backlog",
        tasks: [
          {
            id: uuidv4(),
            title: "Finish design mockups",
            description: "Create high-fidelity designs for the new homepage",
            dueDate: "2023-06-15",
            status: "backlog",
            assignee: "rahul@eduvance.com",
            labels: ["design", "high-priority"],
            priority: "high",
          },
          {
            id: uuidv4(),
            title: "Implement login functionality",
            description:
              "Integrate the authentication system with the backend API",
            dueDate: "2023-06-20",
            status: "backlog",
            assignee: "om@eduvance.com",
            labels: ["engineering", "medium-priority"],
            priority: "medium",
          },
        ],
        wip: 2,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Product",
    wipLimits: [
      {
        id: uuidv4(),
        name: "Backlog",
        tasks: [
          {
            id: uuidv4(),
            title: "Finish design mockups",
            description: "Create high-fidelity designs for the new homepage",
            dueDate: "2023-06-15",
            status: "backlog",
            assignee: "ganesh@eduvance.com",
            labels: ["design", "high-priority"],
            priority: "high",
          },
          {
            id: uuidv4(),
            title: "Implement login functionality",
            description:
              "Integrate the authentication system with the backend API",
            dueDate: "2023-06-20",
            status: "backlog",
            assignee: "om@eduvance.com",
            labels: ["engineering", "medium-priority"],
            priority: "medium",
          },
        ],
        wip: 2,
      },
    ],
  },
];
