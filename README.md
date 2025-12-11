# TanStack React Query Learning Project

This is my learning project for [TanStack React Query](https://tanstack.com/query/latest) (formerly React Query), a powerful data fetching and state management library for React applications.

## 📚 About This Project

This project demonstrates the fundamentals of TanStack React Query by building a simple application that fetches and displays posts from an API. It serves as a practical introduction to modern data fetching patterns in React.

## ✨ Features Demonstrated

- **Data Fetching**: Using `useQuery` hook to fetch data from an external API
- **Loading States**: Handling loading states with `isLoading`
- **Error Handling**: Managing errors with proper error states
- **Query Keys**: Understanding query key management
- **QueryClient Setup**: Configuring the QueryClientProvider
- **Automatic Caching**: Leveraging React Query's built-in caching mechanisms

## 🛠️ Tech Stack

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling for fast development
- **TanStack React Query v5** - Powerful data synchronization for React
- **Tailwind CSS v4** - Utility-first CSS framework
- **JSONPlaceholder API** - Free fake API for testing and prototyping

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nayem567/tanstack-react-query-1.git
cd tanstack-react-query-1
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

## 🚀 Running the Project

Start the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## 📖 What I Learned

- How to set up TanStack React Query in a React application
- The basics of the `useQuery` hook for data fetching
- Managing loading and error states effectively
- The importance of query keys for cache management
- How React Query automatically handles caching and refetching

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 📝 Code Example

Here's a simple example of using `useQuery`:

```javascript
const { data, isLoading, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPost,
});
```

## 🌐 API Used

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - a free fake REST API for testing and prototyping.

## 📚 Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📄 License

This is a personal learning project and is open for anyone to learn from.

---

Built with ❤️ while learning TanStack React Query
