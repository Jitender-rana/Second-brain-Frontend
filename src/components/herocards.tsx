

type HeroCardprops={
    title: string;
    description: string;
    icon?: string;
}

export function HeroCard({title,description,icon}:HeroCardprops){
    return <div className="p-8 sm:min-h-56 hover:animate-bounce">
        <div className="float-left max-h-16 max-w-20 text-gray-200 pr-4 pb-4 hover:animate-bounce"><img src={icon} alt="" /></div>
        <h1 className="text-3xl text-gray-700">{title}</h1>
        <h2 className="text-lg text-gray-600">{description}</h2>

    </div>
}
