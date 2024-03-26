export default function name({ children }: { children: React.ReactNode }) {
  return <>
  <div className="border-b p-1 text-center bg-red-200">20% off for the next few days</div>
    {children}
    </>
}
