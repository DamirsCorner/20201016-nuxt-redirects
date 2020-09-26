import { Context } from '@nuxt/types'
import { getRedirectUrl } from '~/services/redirects'

export default async function (context: Context) {
  const redirectUrl = await getRedirectUrl(context.route.path)
  if (redirectUrl) {
    context.redirect(301, redirectUrl)
  }
}
