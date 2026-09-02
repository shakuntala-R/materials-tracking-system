# Materials Tracking System

A web application for tracking incoming and outgoing materials in a company.

## Features

### Incoming Materials
- Track material receipt date
- Invoice number and tracking
- Supplier information
- Quantity management
- Department assignment

### Outgoing Materials
- Track material dispatch
- Issue/requisition tracking
- Recipient department
- Quantity tracking
- Date records

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shakuntala-R/materials-tracking-system.git

# Install dependencies
cd materials-tracking-system
npm install

# Configure environment variables
cp .env.example .env

# Start the application
npm run dev
```

## Project Structure

```
materials-tracking-system/
├── client/              # React frontend
├── server/              # Express backend
├── models/              # Database schemas
├── routes/              # API routes
└── README.md
```

## License

MIT