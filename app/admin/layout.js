// This ensures the admin page doesn't inherit global layout styles if they conflict,
// though it will still render inside your Root Layout's <body>.
export default function AdminLayout({ children }) {
  return (
    <section>
      {/* You can add a specific Admin Header here if you want */}
      {children}
    </section>
  );
}