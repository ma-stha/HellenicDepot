document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Menu Data Store
  // ==========================================
  const menuData = {
    starters: [
      { id: 1, name: 'Saganaki', description: 'Pan-fried kefalograviera cheese, flambéed with ouzo', price: 16.50, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', category: 'starters', tags: ['vegetarian'], popular: true },
      { id: 2, name: 'Dolmades', description: 'Vine leaves stuffed with rice, herbs & lemon sauce', price: 14.50, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', category: 'starters', tags: ['vegetarian'] },
      { id: 3, name: 'Spanakopita', description: 'Crispy filo pastry filled with spinach & feta', price: 13.50, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', category: 'starters', tags: ['vegetarian'] },
      { id: 4, name: 'Calamari', description: 'Lightly fried calamari served with lemon & tartar sauce', price: 17.90, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', category: 'starters', tags: ['seafood'], popular: true },
      { id: 5, name: 'Grilled Octopus', description: 'Chargrilled octopus with olive oil, oregano & lemon', price: 22.90, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', category: 'starters', tags: ['seafood'] },
      { id: 6, name: 'Hummus', description: 'Classic chickpea dip with tahini, olive oil & warm pita', price: 12.50, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', category: 'starters', tags: ['vegan'] },
    ],
    gyro: [
      { id: 7, name: 'Chicken Gyro Plate', description: 'Marinated chicken cooked on charcoal, served with chips, salad & tzatziki', price: 24.90, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', category: 'gyro', tags: [], popular: true },
      { id: 8, name: 'Pork Gyro Plate', description: 'Slow-cooked pork gyro off the spit, with chips, salad & tzatziki', price: 24.90, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400', category: 'gyro', tags: [] },
      { id: 9, name: 'Lamb Gyro Plate', description: 'Tender lamb gyro cooked traditional style, with chips, salad & tzatziki', price: 26.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', category: 'gyro', tags: [], popular: true },
      { id: 10, name: 'Mixed Gyro Plate', description: 'Selection of chicken, pork & lamb gyro with all the trimmings', price: 28.90, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', category: 'gyro', tags: [] },
    ],
    souvlaki: [
      { id: 11, name: 'Chicken Souvlaki Wrap', description: 'Grilled chicken, tzatziki, tomato, onion & chips in pita', price: 14.90, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400', category: 'souvlaki', tags: [], popular: true },
      { id: 12, name: 'Pork Souvlaki Wrap', description: 'Seasoned pork, tzatziki, tomato, onion & chips in pita', price: 14.90, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400', category: 'souvlaki', tags: [] },
      { id: 13, name: 'Lamb Souvlaki Wrap', description: 'Tender lamb, tzatziki, tomato, onion & chips in pita', price: 16.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', category: 'souvlaki', tags: [] },
      { id: 14, name: 'Halloumi Souvlaki Wrap', description: 'Grilled halloumi, tzatziki, tomato, onion & chips in pita', price: 14.90, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', category: 'souvlaki', tags: ['vegetarian'] },
    ],
    mains: [
      { id: 15, name: 'Lamb Cutlets', description: 'Chargrilled lamb cutlets with lemon potatoes & seasonal vegetables', price: 34.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', category: 'mains', tags: [], popular: true },
      { id: 16, name: 'Whole Grilled Snapper', description: 'Whole snapper grilled with olive oil, lemon & oregano', price: 38.90, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', category: 'mains', tags: ['seafood'] },
      { id: 17, name: 'Moussaka', description: 'Traditional layered eggplant, minced meat & béchamel', price: 23.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', category: 'mains', tags: [] },
      { id: 18, name: 'Chicken Skewers', description: 'Two charcoal grilled chicken skewers with chips & salad', price: 22.90, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', category: 'mains', tags: [] },
      { id: 19, name: 'Mixed Grill Platter', description: 'Selection of lamb cutlets, chicken, pork & loukaniko sausage', price: 42.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', category: 'mains', tags: [], popular: true },
    ],
    salads: [
      { id: 20, name: 'Horiatiki (Village Salad)', description: 'Tomato, cucumber, onion, olives, capsicum & feta', price: 16.50, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', category: 'salads', tags: ['vegetarian'] },
      { id: 21, name: 'Hellenic Salad', description: 'Mixed greens, haloumi, cherry tomato, walnut & pomegranate', price: 18.50, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', category: 'salads', tags: ['vegetarian'] },
    ],
    desserts: [
      { id: 22, name: 'Baklava', description: 'Layers of filo pastry, walnuts & honey syrup', price: 12.90, image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400', category: 'desserts', tags: ['vegetarian'], popular: true },
      { id: 23, name: 'Loukoumades', description: 'Greek honey donuts with cinnamon & crushed walnuts', price: 13.90, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400', category: 'desserts', tags: ['vegetarian'] },
      { id: 24, name: 'Galaktoboureko', description: 'Semolina custard in crispy filo, drizzled with syrup', price: 12.90, image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400', category: 'desserts', tags: ['vegetarian'] },
    ],
    drinks: [
      { id: 25, name: 'Greek Frappé', description: 'Classic iced instant coffee, shaken to perfection', price: 6.50, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400', category: 'drinks', tags: [] },
      { id: 26, name: 'Freddo Espresso', description: 'Double espresso shaken with ice', price: 7.00, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400', category: 'drinks', tags: [] },
      { id: 27, name: 'Mythos Beer', description: 'Imported Greek lager, light and refreshing', price: 9.50, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', category: 'drinks', tags: [] },
      { id: 28, name: 'House Wine (Glass)', description: 'Selected Greek red or white wine', price: 11.00, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', category: 'drinks', tags: [] },
    ]
  };

  const allItems = Object.values(menuData).flat();

  // ==========================================
  // 14. Utility Functions
  // ==========================================
  const formatCurrency = (amount) => `$${parseFloat(amount).toFixed(2)}`;
  
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const getCurrentPage = () => {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page === '' ? 'index.html' : page;
  };

  // ==========================================
  // 10. Toast Notification System
  // ==========================================
  const showToast = (message, type = 'success') => {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `;
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Basic styling for toast
    const bgColors = { success: '#4CAF50', error: '#F44336', info: '#2196F3' };
    toast.style.cssText = `
      background-color: ${bgColors[type] || bgColors.info};
      color: white;
      padding: 12px 20px;
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      font-size: 14px;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    `;
    
    toast.innerHTML = message;
    toastContainer.appendChild(toast);

    // Slide in
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    });

    // Remove after 3s
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      toast.style.opacity = '0';
      setTimeout(() => {
        if (toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }, 3000);
  };

  // ==========================================
  // 2. Shopping Cart System
  // ==========================================
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
  };

  const addToCart = (itemId, quantity = 1) => {
    const item = allItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...item, quantity });
    }
    
    saveCart();
    showToast(`${item.name} added to cart!`, 'success');
  };

  const removeFromCart = (itemId) => {
    const index = cart.findIndex(i => i.id === itemId);
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      saveCart();
      if (getCurrentPage().includes('cart')) {
        renderCart();
        renderOrderSummary();
      }
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      cart = cart.filter(i => i.id !== itemId);
    } else {
      const item = cart.find(i => i.id === itemId);
      if (item) item.quantity = quantity;
    }
    saveCart();
    if (getCurrentPage().includes('cart')) {
      renderCart();
      renderOrderSummary();
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    cart = [];
    saveCart();
    if (getCurrentPage().includes('cart')) {
      renderCart();
      renderOrderSummary();
    }
    showToast('Cart cleared', 'info');
  };

  const updateCartBadge = () => {
    const badges = document.querySelectorAll('.cart-badge');
    const count = getCartCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    });
  };

  const renderCart = () => {
    const cartContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartLayout = document.getElementById('cartLayout');
    const itemCount = document.getElementById('itemCount');
    const clearBtn = document.getElementById('clearCartBtn');
    
    if (!cartContainer) return;

    if (cart.length === 0) {
      if (cartLayout) cartLayout.style.display = 'none';
      if (cartEmpty) cartEmpty.style.display = 'block';
      return;
    }

    if (cartLayout) cartLayout.style.display = 'grid';
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (itemCount) itemCount.textContent = `${getCartCount()} Item${getCartCount() !== 1 ? 's' : ''}`;

    cartContainer.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?w=400'">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-desc">${item.description}</p>
          <span class="cart-item-price">${formatCurrency(item.price)}</span>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-controls">
            <button class="qty-btn minus" data-id="${item.id}">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn plus" data-id="${item.id}">+</button>
          </div>
          <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i> Remove</button>
        </div>
      </div>
    `).join('');

    // Attach event listeners
    cartContainer.querySelectorAll('.minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        removeFromCart(id);
      });
    });

    cartContainer.querySelectorAll('.plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        addToCart(id, 1);
        renderCart();
        renderOrderSummary();
      });
    });

    cartContainer.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        updateQuantity(id, 0);
      });
    });

    // Clear cart button
    if (clearBtn) {
      clearBtn.onclick = () => clearCart();
    }
  };

  const renderOrderSummary = () => {
    const subtotalEl = document.getElementById('cartSubtotal');
    const gstEl = document.getElementById('cartGst');
    const deliveryEl = document.getElementById('cartDelivery');
    const totalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    const subtotal = getCartTotal();
    const gst = subtotal * 0.10;
    const delivery = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + gst + delivery;

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (gstEl) gstEl.textContent = formatCurrency(gst);
    if (deliveryEl) deliveryEl.textContent = formatCurrency(delivery);
    if (totalEl) totalEl.textContent = formatCurrency(total);

    if (checkoutBtn) {
      checkoutBtn.onclick = () => {
        if (cart.length === 0) {
          showToast('Your cart is empty!', 'error');
        } else {
          showToast('Checkout functionality coming soon!', 'info');
        }
      };
    }
  };

  // ==========================================
  // 3. Navigation
  // ==========================================
  const initNavigation = () => {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll background
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });
    }

    // Active link highlighting
    const currentPage = getCurrentPage();
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPage || (currentPage === 'index.html' && link.getAttribute('href') === '/')) {
        link.classList.add('active');
      }
      
      // Close mobile menu on link click
      link.addEventListener('click', () => {
        if(navLinks?.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileToggle?.classList.remove('active');
        }
      });
    });

    // Smooth scroll for anchor links on index page
    if (currentPage === 'index.html') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  };

  // ==========================================
  // 4. Menu Page Functionality
  // ==========================================
  const initMenu = () => {
    const menuContainer = document.getElementById('menuGrid');
    const filterBtns = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('menuSearchInput');
    const menuEmpty = document.getElementById('menuEmpty');
    const resetBtn = document.getElementById('resetMenuFilters');
    
    if (!menuContainer) return;

    const renderMenuItems = (itemsToRender) => {
      menuContainer.style.opacity = 0;
      
      setTimeout(() => {
        if (itemsToRender.length === 0) {
          menuContainer.style.display = 'none';
          if (menuEmpty) menuEmpty.style.display = 'block';
        } else {
          menuContainer.style.display = 'grid';
          if (menuEmpty) menuEmpty.style.display = 'none';
          menuContainer.innerHTML = itemsToRender.map(item => `
            <div class="menu-item-card fade-in-up">
              <div class="item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?w=400'">
                ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
              </div>
              <div class="item-info">
                ${item.tags.length > 0 ? `<div class="item-tags">${item.tags.map(tag => `<span class="item-tag">${tag}</span>`).join('')}</div>` : ''}
                <h3 class="item-name">${item.name}</h3>
                <p class="item-desc">${item.description}</p>
                <div class="item-footer">
                  <span class="item-price">${formatCurrency(item.price)}</span>
                  <button class="gold-btn-sm add-to-cart-btn" data-id="${item.id}"><i class="fas fa-plus"></i> Add</button>
                </div>
              </div>
            </div>
          `).join('');

          // Re-attach add to cart listeners
          menuContainer.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
              const id = parseInt(btn.dataset.id);
              addToCart(id);
            });
          });
        }
        
        menuContainer.style.opacity = 1;
        initScrollAnimations(); // Re-init observers for new elements
      }, 300);
    };

    // Initial render
    renderMenuItems(allItems);

    // Filter functionality
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.dataset.category;
        let filtered = category === 'all' ? allItems : menuData[category] || [];
        
        // Respect current search
        const searchTerm = searchInput?.value.toLowerCase() || '';
        if (searchTerm) {
          filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
          );
        }
        
        renderMenuItems(filtered);
      });
    });

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-tab.active')?.dataset.category || 'all';
        
        let filtered = activeFilter === 'all' ? allItems : menuData[activeFilter] || [];
        
        filtered = filtered.filter(item => 
          item.name.toLowerCase().includes(searchTerm) || 
          item.description.toLowerCase().includes(searchTerm)
        );
        
        renderMenuItems(filtered);
      }, 300));
    }

    // Reset filters button
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtns[0]?.classList.add('active');
        if (searchInput) searchInput.value = '';
        renderMenuItems(allItems);
      });
    }
  };

  // ==========================================
  // 5. Scroll Animations
  // ==========================================
  const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Number counter animation
          if ((entry.target.classList.contains('stat-number') || entry.target.classList.contains('counter-number')) && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.dataset.target || entry.target.dataset.count || entry.target.innerText);
            let count = 0;
            const updateCount = () => {
              const inc = Math.max(1, target / 50); // speed
              if (count < target) {
                count += inc;
                entry.target.innerText = Math.min(target, Math.ceil(count));
                requestAnimationFrame(updateCount);
              } else {
                entry.target.innerText = target;
                entry.target.classList.add('counted');
              }
            };
            updateCount();
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up, .stat-number, .counter-number').forEach(el => {
      observer.observe(el);
    });

    // Parallax
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
      window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        parallaxBg.style.transform = `translateY(${scrollPos * 0.5}px)`;
      });
    }
  };

  // ==========================================
  // 6. Testimonial Slider
  // ==========================================
  const initTestimonials = () => {
    const track = document.getElementById('testimonialTrack') || document.querySelector('.testimonial-track');
    const dotsContainer = document.getElementById('testimonialDots') || document.querySelector('.testimonial-dots');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const slider = document.getElementById('testimonialSlider') || document.querySelector('.testimonials-slider');

    if (!track) return;

    const slides = track.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    // Generate dots if dots container is empty
    if (dotsContainer && dotsContainer.children.length === 0) {
      dotsContainer.innerHTML = Array.from(slides).map((_, i) => `
        <span class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
      `).join('');
    }

    const showSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.testimonial-dot, .dot');
        dots.forEach((d, i) => {
          if (i === currentSlide) d.classList.add('active');
          else d.classList.remove('active');
        });
      }
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    const startSlider = () => {
      slideInterval = setInterval(nextSlide, 5000);
    };

    const stopSlider = () => {
      clearInterval(slideInterval);
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopSlider();
        prevSlide();
        startSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopSlider();
        nextSlide();
        startSlider();
      });
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.testimonial-dot, .dot');
        if (dot && dot.dataset.index !== undefined) {
          stopSlider();
          showSlide(parseInt(dot.dataset.index));
          startSlider();
        }
      });
    }

    if (slider) {
      slider.addEventListener('mouseenter', stopSlider);
      slider.addEventListener('mouseleave', startSlider);
    }

    // Touch swipe support
    let touchstartX = 0;
    let touchendX = 0;
    
    if (slider) {
      slider.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
      }, { passive: true });

      slider.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (touchendX < touchstartX - 50) {
          stopSlider(); nextSlide(); startSlider();
        }
        if (touchendX > touchstartX + 50) {
          stopSlider(); prevSlide(); startSlider();
        }
      }, { passive: true });
    }

    startSlider();
  };

  // ==========================================
  // 7. Gallery Filtering & Lightbox
  // ==========================================
  const initGallery = () => {
    const filterBtns = document.querySelectorAll('.glass-filter-btn, .filter-btn');
    const items = document.querySelectorAll('.gallery-card-glass, .gallery-item');

    if (filterBtns.length > 0 && items.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const filter = btn.dataset.filter;

          items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = 'flex';
              setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.95)';
              setTimeout(() => { item.style.display = 'none'; }, 250);
            }
          });
        });
      });
    }
  };

  const initLightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-card-glass, .gallery-item');
    if (galleryItems.length === 0) return;

    let currentIndex = 0;
    
    // Check if lightbox exists in HTML or create dynamically
    let lightbox = document.getElementById('lightbox') || document.querySelector('.lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.id = 'lightbox';
      lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-prev">&lt;</button>
        <div class="lightbox-content">
          <img class="lightbox-img" src="" alt="Gallery Image">
          <div class="lightbox-caption"></div>
        </div>
        <button class="lightbox-next">&gt;</button>
      `;
      document.body.appendChild(lightbox);
    }

    const imgEl = lightbox.querySelector('img');
    const captionEl = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    const getItemData = (index) => {
      const item = galleryItems[index];
      const img = item.querySelector('img');
      const title = item.querySelector('h4')?.textContent || img?.alt || 'Gallery Image';
      return { src: img?.src || '', title };
    };

    const openLightbox = (index) => {
      currentIndex = index;
      const data = getItemData(currentIndex);
      if (imgEl) imgEl.src = data.src;
      if (captionEl) captionEl.textContent = data.title;
      lightbox.classList.add('active');
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    };

    const showNext = (e) => {
      e?.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryItems.length;
      const data = getItemData(currentIndex);
      if (imgEl) imgEl.src = data.src;
      if (captionEl) captionEl.textContent = data.title;
    };

    const showPrev = (e) => {
      e?.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      const data = getItemData(currentIndex);
      if (imgEl) imgEl.src = data.src;
      if (captionEl) captionEl.textContent = data.title;
    };

    galleryItems.forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.style.display === 'flex' || lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
      }
    });
  };

  // ==========================================
  // 8. Contact Form
  // ==========================================
  const initContactForm = () => {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Simulate API call
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
      }, 1500);
    });
  };

  // ==========================================
  // 9. Reservation Form
  // ==========================================
  const initReservationForm = () => {
    const resForm = document.getElementById('reservationForm');
    if (!resForm) return;

    // Set min date to today
    const dateInput = resForm.querySelector('#res-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const date = document.getElementById('res-date')?.value;
      const time = document.getElementById('res-time')?.value;
      const guests = document.getElementById('res-guests')?.value;

      if (!date || !time || !guests) {
        showToast('Please fill out date, time, and number of guests.', 'error');
        return;
      }

      // Basic hour validation (e.g., 11:00 to 22:00)
      const hour = parseInt(time.split(':')[0]);
      if (hour < 11 || hour > 21) {
        showToast('Reservations are only available between 11:00 AM and 10:00 PM.', 'error');
        return;
      }

      const submitBtn = resForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Confirming...</span> <i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Reservation confirmed! See you then.', 'success');
        resForm.reset();
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
      }, 1500);
    });
  };

  // ==========================================
  // 11. Scroll to Top Button
  // ==========================================
  const initScrollToTop = () => {
    const topBtn = document.createElement('button');
    topBtn.id = 'scroll-top-btn';
    topBtn.innerHTML = '↑';
    topBtn.title = 'Go to top';
    
    topBtn.style.cssText = `
      display: none; position: fixed; bottom: 30px; left: 30px; 
      z-index: 99; border: none; outline: none; background-color: var(--primary-color, #0056b3); 
      color: white; cursor: pointer; padding: 15px; border-radius: 50%; 
      font-size: 18px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      transition: opacity 0.3s, background-color 0.3s; opacity: 0;
    `;
    
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        topBtn.style.display = 'block';
        setTimeout(() => topBtn.style.opacity = '1', 10);
      } else {
        topBtn.style.opacity = '0';
        setTimeout(() => {
          if(window.scrollY <= 300) topBtn.style.display = 'none';
        }, 300);
      }
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // ==========================================
  // 12 & 13. Page Load Animation & Preloader
  // ==========================================
  const initPageLoad = () => {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }

    // Page transition / fade in
    document.body.classList.add('loaded');
    
    // Staggered hero elements
    const heroElements = document.querySelectorAll('.hero-stagger');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-visible');
      }, index * 200);
    });
  };

  // ==========================================
  // 15. Initialize
  // ==========================================
  const init = () => {
    initPageLoad();
    initNavigation();
    updateCartBadge();
    initScrollToTop();
    initScrollAnimations();
    
    const page = getCurrentPage();
    if (page.includes('menu')) {
      initMenu();
    } else if (page.includes('cart')) {
      renderCart();
      renderOrderSummary();
    } else if (page.includes('contact')) {
      initContactForm();
    } else if (page.includes('reservation')) {
      initReservationForm();
    } else if (page.includes('gallery')) {
      initGallery();
      initLightbox();
    } else {
      // Index page (home)
      initTestimonials();
    }

    // Init lightbox on gallery page specifically
    if (page.includes('gallery')) {
      initLightbox();
    }

    // Global: Add to cart buttons
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.add-to-cart-btn');
      if (btn) {
        const id = parseInt(btn.dataset.id);
        if (id) addToCart(id);
      }
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing!', 'success');
        newsletterForm.reset();
      });
    }
  };

  // Run initialization
  init();

});
