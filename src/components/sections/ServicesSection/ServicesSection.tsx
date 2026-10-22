import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileSearch, Globe, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { services } from '@data/index';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search: ({ className }) => <Search className={className} />,
  FileSearch: ({ className }) => <FileSearch className={className} />,
  Globe: ({ className }) => <Globe className={className} />,
  FileText: ({ className }) => <FileText className={className} />,
  MessageCircle: ({ className }) => <MessageCircle className={className} />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Услуги SEO-продвижения</h2>
          <p className="text-lg text-dark-800 max-w-2xl mx-auto">
            Комплексный подход к росту вашего сайта в поисковых системах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <Card key={service.id} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow group">
                <Icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-dark-800 mb-4">{service.description}</p>
                <Link
                  to={`/uslugi/${service.slug}/`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
                >
                  Подробнее <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
