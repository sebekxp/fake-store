'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card/card';
import type { CartItem } from '../../store/cart-store';

import styles from './cart-product-list.module.css';

interface CartProductListProps {
  cart: CartItem[];
  updateQuantity: (args: { productId: number; newQuantity: number }) => void;
  removeFromCart: (productId: number) => void;
}

export function CartProductList({ cart, updateQuantity, removeFromCart }: CartProductListProps) {
  return (
    <section className={styles.itemsCol}>
      {cart.map(item => (
        <Card key={item.product.id}>
          <CardContent>
            <div className={styles.itemRow}>
              <div className={styles.imageBox}>
                <Image
                  src={item.product.image}
                  alt={item.product.title}
                  fill
                  className={styles.productImage}
                  sizes="160px"
                />
              </div>
              <div className={styles.detailsBox}>
                <CardTitle className={styles.titleClamp}>{item.product.title}</CardTitle>
                <p>Category: {item.product.category}</p>
                <div className={styles.priceRow}>
                  <span className={styles.price}>${item.product.price.toFixed(2)}</span>
                  <div className={styles.qtyControls}>
                    <Button
                      onClick={() =>
                        updateQuantity({
                          productId: item.product.id,
                          newQuantity: Math.max(0, item.quantity - 1),
                        })
                      }
                      aria-label="Decrease quantity"
                    >
                      <span>−</span>
                    </Button>
                    <span className={styles.qty}>{item.quantity}</span>
                    <Button
                      onClick={() =>
                        updateQuantity({
                          productId: item.product.id,
                          newQuantity: item.quantity + 1,
                        })
                      }
                      aria-label="Increase quantity"
                    >
                      <span>+</span>
                    </Button>
                    <Button
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove from cart"
                    >
                      <span>🗑️</span>
                    </Button>
                  </div>
                </div>
                <div className={styles.subtotalRow}>
                  <p>Subtotal: ${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

CartProductList.displayName = 'CartProductList';
