interface ActionButton {
  title: string;
  description: string;
  icon: string;
  href: string;
  buttonText: string;
}

interface ButtonGroupProps {
  buttons: ActionButton[];
  className?: string;
}

export function ButtonGroup({ buttons, className = '' }: ButtonGroupProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto ${className}`}>
      {buttons.map((button, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sage-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="text-center">
            <div className="bg-sage-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className={`${button.icon} text-2xl text-sage-green-600`}></i>
            </div>
            <h3 className="text-xl font-semibold text-sage-green-800 mb-2">{button.title}</h3>
            <p className="text-sage-green-600 mb-4">{button.description}</p>
            <a
              href={button.href}
              className="inline-flex items-center px-4 py-2 bg-sage-green-600 hover:bg-sage-green-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              {button.buttonText}
              <i className="pi pi-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
