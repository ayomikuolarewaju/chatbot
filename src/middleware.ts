import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const formSuccess = request.cookies.get('formSuccess')?.value

  // Allow access if cookie is set
  if (formSuccess === 'true') {
    
    const response = NextResponse.next()

    response.cookies.set('formSuccess', '', {
      maxAge: 0,
      path: '/',
    })

     return response 
  }
     return NextResponse.redirect(new URL('/', request.url))
  
}
 
export const config = {
  matcher: '/success',
}