import { newsData } from '../../../utils/NewsArray'

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-20">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Latest News
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              index % 5 === 0
                ? 'sm:col-span-2 lg:col-span-2 row-span-2'
                : 'col-span-1'
            }`}
            style={{
              backgroundImage: `url(${news.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: index % 5 === 0 ? '300px' : '200px',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                {news.title}
              </h2>
              <p className="text-xs sm:text-sm opacity-80">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
