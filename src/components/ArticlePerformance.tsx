interface ArticlePerformanceProps {
    calculateArticleAccuracy: (article: 'der' | 'die' | 'das') => number;
}

const ArticlePerformance: React.FC<ArticlePerformanceProps> = ({
    calculateArticleAccuracy,
}) => {
    return (
        <div className='bg-white p-4 rounded-lg shadow mb-6'>
            <h2 className='font-bold mb-2 text-center'>Article Accuracy</h2>
            <div className='grid grid-cols-3 gap-2'>
                <div className='bg-blue-100 p-2 rounded text-center'>
                    <div className='font-bold'>der</div>
                    <div>{calculateArticleAccuracy('der')}%</div>
                </div>
                <div className='bg-red-100 p-2 rounded text-center'>
                    <div className='font-bold'>die</div>
                    <div>{calculateArticleAccuracy('die')}%</div>
                </div>
                <div className='bg-green-100 p-2 rounded text-center'>
                    <div className='font-bold'>das</div>
                    <div>{calculateArticleAccuracy('das')}%</div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePerformance;
