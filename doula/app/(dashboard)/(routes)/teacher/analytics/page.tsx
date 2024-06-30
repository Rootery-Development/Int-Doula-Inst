import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

import { getAnalytics } from '@/actions/get-analytics';
<<<<<<< HEAD
import { DataCard } from './_componenets/data-card';
import { Chart } from './_componenets/chart';
=======
import { DataCard } from './_components/data-card';
import { Chart } from './_components/chart';
>>>>>>> bed8e42685e04bfc762b90005269364cff930fee

const AnalyticsPage = async () => {

    const { userId } = auth();
    if (!userId) {
        return redirect('/');
    }

    const {
        data,
        totalRevenue,
        totalSales,
    } = await getAnalytics(userId);

    return (
    <div className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            
            <DataCard 
                label="Total Revenue"
                value={totalRevenue}
                shouldFormat
            />
            <DataCard 
                label="Total Sales"
                value={totalSales}
                shouldFormat={false}
            />
        </div>
        <Chart data={data} />
    </div>
  )
}

<<<<<<< HEAD
export default AnalyticsPage;
=======
export default AnalyticsPage;
>>>>>>> bed8e42685e04bfc762b90005269364cff930fee
