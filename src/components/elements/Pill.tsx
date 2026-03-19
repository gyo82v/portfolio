export default function Pill({children, className}:{children: React.ReactNode, className? : string}){
    return(
        <span 
          className={`inline-block text-xs font-medium px-3 py-1 rounded-full
                     bg-slate-100 text-slate-700 
                     dark:bg-slate-800 dark:text-slate-200
                      ${className}`}        
        >
            {children}
        </span>
    )
}