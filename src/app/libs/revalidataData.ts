import { revalidateTag } from "next/cache";

export default async function revalidateData () {
    revalidateTag('allCompanies')
    revalidateTag('companyData')
    revalidateTag('allUser')
    revalidateTag('userData')
}