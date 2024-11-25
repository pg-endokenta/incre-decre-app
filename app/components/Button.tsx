

type ButtonProps = {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
}
export default function Button({ label, icon, onClick }: ButtonProps) {
    return (
        <button 
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            onClick={onClick}
        >
        { label }
        { icon }
        </button>
    );
}