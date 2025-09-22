

// ================== FRONTEND TYPES SCHEMA ==================

// Енуми (копіюємо з бекенду, але експортуємо для фронтенду)
export enum UserRole {
    CUSTOMER = "CUSTOMER",
    MANAGER = "MANAGER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN"
  }
  
  export enum ProductStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE", 
    INACTIVE = "INACTIVE",
    ARCHIVED = "ARCHIVED"
  }
  
  export enum ProductType {
    FOOD = "FOOD",
    CLOTHING = "CLOTHING",
    ACCESSORIES = "ACCESSORIES",
    OTHER = "OTHER"
  }
  
  export enum OrderStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    PROCESSING = "PROCESSING", 
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED"
  }
  
  export enum PaymentStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED",
    PARTIALLY_PAID = "PARTIALLY_PAID"
  }
  
  export enum FulfillmentStatus {
    UNFULFILLED = "UNFULFILLED",
    PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
    FULFILLED = "FULFILLED",
    RESTOCKED = "RESTOCKED"
  }
  
  export enum DiscountType {
    PERCENTAGE = "PERCENTAGE",
    FIXED_AMOUNT = "FIXED_AMOUNT"
  }
  
  // ================== BASE TYPES ==================
  
  export interface User {
    id: string
    email: string
    phone?: string
    firstName: string
    lastName: string
    dateOfBirth?: string // ISO string замість Date
    isVerified: boolean
    isActive: boolean
    lastLoginAt?: string // ISO string
    role: UserRole
    favorites: string[]
    createdAt: string // ISO string
    updatedAt: string // ISO string
    // passwordHash НЕ включаємо для безпеки
  }
  
  export interface UserAddress {
    id: string
    userId: string
    firstName: string
    lastName: string
    company?: string
    address1: string
    address2?: string
    city: string
    state?: string
    zipCode: string
    country: string
    phone?: string
    isDefault: boolean
    createdAt: string
    updatedAt: string
  }
  
  export interface Category {
    id: string
    name: string
    slug: string
    description?: string
    image?: string
    parentId?: string
    sortOrder: number
    isActive: boolean
    tags: string[]
    metaTitle?: string
    metaDescription?: string
    createdAt: string
    updatedAt: string
  }
  
  export interface Product {
    id: string
    sku: string
    name: string
    slug: string
    description?: string
    shortDescription?: string
    price: string // Decimal як string для точності
    weight?: string // Decimal як string
    quantity: number
    reservedQuantity: number
    productType: ProductType
    status: ProductStatus
    isActive: boolean
    isFeatured: boolean
    viewsCount: number
    salesCount: number
    metaTitle?: string
    metaDescription?: string
    createdAt: string
    updatedAt: string
    publishedAt?: string
  }
  
  export interface ProductImage {
    id: string
    productId: string
    url: string
    altText?: string
    sortOrder: number
    isPrimary: boolean
    createdAt: string
  }
  
  export interface ProductVariant {
    id: string
    productId: string
    sku: string
    name?: string
    price: string // Decimal як string
    weight?: string // Decimal як string
    quantity: number
    reservedQuantity: number
    options: Record<string, undefined> // JSON
    isActive: boolean
    sortOrder: number
    createdAt: string
    updatedAt: string
  }
  
  export interface CartItem {
    id: string
    userId?: string
    sessionId?: string
    productId: string
    variantId?: string
    quantity: number
    createdAt: string
    updatedAt: string
  }
  
  export interface Order {
    id: string
    orderNumber: string
    userId?: string
    guestEmail?: string
    guestPhone?: string
    guestFirstName?: string
    guestLastName?: string
    shippingAddress: Address // JSON розпакований
    billingAddress?: Address // JSON розпакований
    subtotal: string // Decimal як string
    taxAmount: string
    shippingAmount: string
    discountAmount: string
    totalAmount: string
    status: OrderStatus
    paymentStatus: PaymentStatus
    fulfillmentStatus: FulfillmentStatus
    notes?: string
    createdAt: string
    updatedAt: string
    processedAt?: string
  }
  
  export interface OrderItem {
    id: string
    orderId: string
    productId: string
    variantId?: string
    quantity: number
    unitPrice: string // Decimal як string
    totalPrice: string // Decimal як string
    productSnapshot: ProductSnapshot // JSON розпакований
  }
  
  export interface Review {
    id: string
    productId: string
    userId?: string
    orderId?: string
    rating: number
    title?: string
    content?: string
    isVerified: boolean
    isApproved: boolean
    helpfulCount: number
    createdAt: string
    updatedAt: string
  }
  
  export interface Tag {
    id: string
    name: string
    slug: string
    createdAt: string
  }
  
  export interface Discount {
    id: string
    name: string
    code?: string
    type: DiscountType
    value: string // Decimal як string
    minOrderAmount?: string
    maxDiscount?: string
    usageLimit?: number
    usageCount: number
    startsAt?: string
    endsAt?: string
    isActive: boolean
    createdAt: string
    updatedAt: string
  }
  
  // ================== COMPOSED TYPES ==================
  
  export interface ProductCard {
    id: string
    sku: string
    name: string
    slug: string
    shortDescription?: string
    price: string
    formattedPrice: string // "₴1,250.00"
    isFeatured: boolean
    status: ProductStatus
    isInStock: boolean
    primaryImage?: ProductImage
    category?: {
      id: string
      name: string
      slug: string
    }
    averageRating?: number
    totalReviews?: number
  }
  
  export interface ProductDetails extends Product {
    images: ProductImage[]
    categories: Array<{
      id: string
      name: string
      slug: string
      isPrimary: boolean
    }>
    variants: ProductVariant[]
    tags: Tag[]
    reviews: Array<Review & {
      user?: {
        id: string
        firstName: string
        lastName: string
      }
    }>
    // Обчислювані поля
    isInStock: boolean
    formattedPrice: string
    averageRating: number
    totalReviews: number
    relatedProducts?: ProductCard[]
  }
  
  export interface CartItemDetailed extends CartItem {
    product: ProductCard
    variant?: ProductVariant
    totalPrice: string
    formattedTotalPrice: string
  }
  
  export interface OrderDetailed extends Order {
    items: Array<OrderItem & {
      product: ProductCard
      variant?: ProductVariant
    }>
    user?: {
      id: string
      email: string
      firstName: string
      lastName: string
    }
    formattedTotalAmount: string
  }
  
  export interface UserProfile extends User {
    addresses: UserAddress[]
    ordersCount: number
    reviewsCount: number
    favoriteProducts: ProductCard[]
  }
  
  export interface CategoryTree extends Category {
    children: CategoryTree[]
    parent?: Category
    productsCount: number
  }
  
  // ================== UTILITY TYPES ==================
  
  export interface Address {
    firstName: string
    lastName: string
    company?: string
    address1: string
    address2?: string
    city: string
    state?: string
    zipCode: string
    country: string
    phone?: string
  }
  
  export interface ProductSnapshot {
    id: string
    sku: string
    name: string
    price: string
    image?: string
    variant?: {
      id: string
      name: string
      options: Record<string, undefined>
    }
  }
  
  // ================== API RESPONSE TYPES ==================
  
  export interface ApiResponse<T> {
    success: boolean
    data: T
    message?: string
  }
  
  export interface PaginatedResponse<T> {
    success: boolean
    data: T[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
      hasNext: boolean
      hasPrev: boolean
    }
  }
  
  export interface ApiError {
    success: false
    error: {
      code: string
      message: string
      details?: undefined
    }
  }
  
  // ================== FORM TYPES ==================
  
  export interface LoginForm {
    email: string
    password: string
    rememberMe?: boolean
  }
  
  export interface RegisterForm {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    phone?: string
    acceptTerms: boolean
  }
  
  export interface ProductFilters {
    categories?: string[]
    priceMin?: number
    priceMax?: number
    tags?: string[]
    status?: ProductStatus[]
    inStock?: boolean
    isFeatured?: boolean
    search?: string
  }
  
  export interface ProductSort {
    field: 'name' | 'price' | 'createdAt' | 'salesCount' | 'viewsCount'
    direction: 'asc' | 'desc'
  }
  
  export interface CheckoutForm {
    email?: string
    firstName: string
    lastName: string
    phone?: string
    shippingAddress: Address
    billingAddress?: Address
    useBillingAsShipping: boolean
    paymentMethod: string
    notes?: string
  }