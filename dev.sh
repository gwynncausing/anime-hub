#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Anime Site Development Servers...${NC}"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${BLUE}🛑 Shutting down servers...${NC}"
    kill 0
}

trap cleanup EXIT

# Start backend
echo -e "${GREEN}📦 Starting Backend Server (http://localhost:3000)${NC}"
cd backend && npm run dev &

# Wait a bit for backend to start
sleep 2

# Start frontend
echo -e "${GREEN}🎨 Starting Frontend Server (http://localhost:5173)${NC}"
cd frontend && npm run dev &

echo ""
echo -e "${BLUE}✨ Both servers are starting!${NC}"
echo -e "${GREEN}Backend:${NC}  http://localhost:3000/api/health"
echo -e "${GREEN}Frontend:${NC} http://localhost:5173"
echo ""
echo -e "${BLUE}Press Ctrl+C to stop both servers${NC}"
echo ""

# Wait for all background processes
wait
